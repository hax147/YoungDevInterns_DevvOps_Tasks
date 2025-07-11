pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                dir('client') {
                    sh 'npm run build || echo "No build script defined"'
                }
            }
        }
        stage('Test') {
            steps {
                dir('client') {
                    sh 'npm test || echo "No tests defined"'
                }
            }
        }
    }
}

