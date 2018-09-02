# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "bento/centos-6.9"
  config.vm.network "private_network", ip: "192.168.56.230"
  config.vm.hostname = "deaddrop.local"
  config.vm.network :forwarded_port, guest: 80, host: 4444
  config.vm.network :forwarded_port, guest: 443, host: 5555

  config.vm.provider "virtualbox" do |v|
    v.gui    = false
    v.memory = 2048
    v.cpus   = 2
    v.name   = config.vm.hostname
    v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
  end

  config.vm.synced_folder "~/.ssh", "/hostssh", type: "nfs", create: "true"
  config.vm.synced_folder "v-root", "/vagrant", disabled: "true"

  # Update 
  config.vm.provision "shell", inline: "sudo yum update -y"
  # Get Node
  config.vm.provision "shell", inline: "sudo yum install -y gcc-c++ make"
  config.vm.provision "shell", inline: "curl -sl https://rpm.nodesource.com/setup_6.x | sudo -E bash -"
  config.vm.provision "shell", inline: "sudo yum install -y nodejs"
  # Install ember
  config.vm.provision "shell", inline: "npm install -g ember-cli"

  # Set up project folder
  config.vm.synced_folder ".", "/home/vagrant/dev", type: "nfs", create: "true"

  # Set up APi end point
  config.vm.provision "shell", inline: "mkdir /home/vagrant/apiend"
  config.vm.provision "shell", inline: "cd /home/vagrant/apiend"
  config.vm.provision "shell", inline: "npm i knex mysql express body-parser --save"
  config.vm.provision "shell", inline: "sudo npm i knex -g"
  config.vm.provision "shell", inline: "printf \"node_modules\n.DS_Store\" > .gitignore"

  # config.vm.provision "shell", inline: "sudo yum update -y"

end
