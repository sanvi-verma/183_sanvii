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
        echo '🐳 Building Docker image...'
        sh 'docker build -t myapp:latest ./app'
      }
    }
    stage('Test') {
      steps {
        echo '✅ Tests (placeholder)'
        sh 'echo "ok"'
      }
    }
    stage('Deploy') {
      steps {
        echo '🚀 Deploying...'
        sh '''
          docker ps -q --filter name=myapp | grep -q . && docker stop myapp && docker rm myapp || true
          docker run -d --name myapp -p 5000:5000 myapp:latest
        '''
      }
    }
  }
}
