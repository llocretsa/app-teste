# nodejs-express-on-aws-ec2

Este repositório hospeda o código-fonte do sobre CI/CD do Github para uma instância do AWS EC2 via CodePipeline e CodeDeploy. Este aplicativo express node.js como exemplo para a demonstração.

Também criei um vídeo para falar sobre como corrigir algumas das falhas comuns do CodeDeploy que encontrei.
Abaixo estão alguns exemplos:

```
Falha do ApplicationStop com o código de saída 1
```

```
A implantação geral falhou porque muitas instâncias individuais falharam na implantação, poucas instâncias íntegras estão disponíveis para implantação ou algumas instâncias em seu grupo de implantação estão com problemas.
```

===========================

Script EC2 na criação para instalar o CodeDeploy Agent:

```
#!/bin/bash
sudo apt update
sudo apt install ruby
sudo apt install wget
cd /home/ec2-user
wget wget https://aws-codedeploy-sa-east-1.s3.sa-east-1.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto
```

Verifique se o agente do CodeDeploy está em execução:
```
sudo service codedeploy-agent status
```

Local dos logs do CodeDeploy:
```
/opt/codedeploy-agent/deployment-root/deployment-logs/codedeploy-agent-deployments.log
```

Desinstarlar o agente do CodeDeploy:
```
sudo apt autoremove codedeploy-agent
```