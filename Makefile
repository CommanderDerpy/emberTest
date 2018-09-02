help: ## Displays this help message.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

up: ## Runs `vagrant up`.
	vagrant up

halt: ## Runs `vagrant halt`.
	vagrant halt

reload: ## Runs `vagrant reload`.
	vagrant reload

destroy: ## Runs `vagrant destroy`.
	vagrant destroy -f

npm: ## Runs `npm install`.
ifeq ($(ENV),$(VAGRANT))
	@cd $(SITE_PATH)
	npm install
else
	$(RUN_IN_VAGRANT_BOX)
endif

rebuild: ## Cleans and re-provisions the box.
	@make destroy
	@make fresh 
fresh: ## Provisions a freshly checked out project. 
	@make up
	@make reload

# Defines a helper that we can call to rerun a target in the box.
define RUN_IN_VAGRANT_BOX
@vagrant ssh -c "make $(MAKECMDGOALS)"
endef
