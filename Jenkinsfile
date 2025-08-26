pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Getting code...'
                // Use your Git repo here if needed:
                // git branch: 'main', url: 'https://github.com/your/repo.git'
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
                echo '✅ Running basic tests...'
                sh 'echo "Tests passed (placeholder)"'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying container...'
                sh '''
                  docker ps -q --filter name=myapp | grep -q . && docker stop myapp && docker rm myapp || true
                  docker run -d --name myapp -p 5000:5000 myapp:latest
                '''
            }
        }
    }
}

