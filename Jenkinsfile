pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t myapp:latest ./app'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                  docker ps -q --filter name=myapp | grep -q . && docker stop myapp && docker rm myapp || true
                  docker run -d --name myapp -p 5000:5000 myapp:latest
                '''
            }
        }
    }
}
