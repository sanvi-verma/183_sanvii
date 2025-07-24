// Jenkinsfile for a Node.js application
pipeline {
    agent any // Or specify a Docker agent if you have one configured

    tools {
        // Define Node.js tool (configured in Jenkins Global Tool Configuration)
        nodejs 'node-18' // Replace 'node-18' with the name you configure in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from SCM (e.g., Git)
                git branch: 'main', url: 'https://github.com/sanvi-verma/183_sanvii' // Replace with your actual path or remote Git URL
            }
        }

        stage('Build') {
            steps {
                script {
                    // Use a Docker image for the build environment
                    // This creates a temporary container for the 'npm install' command
                    docker.image('node:18-alpine').inside {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Use the same Docker image for testing
                    docker.image('node:18-alpine').inside {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy (Simulated)') {
            steps {
                script {
                    // Simulate deployment by running the Docker image
                    sh 'docker stop my-node-app-container || true' // Stop if already running
                    sh 'docker rm my-node-app-container || true'  // Remove if exists
                    sh 'docker run -d --name my-node-app-container -p 3001:3000 my-node-app:latest'
                    echo "Application deployed and running on http://localhost:3001"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
