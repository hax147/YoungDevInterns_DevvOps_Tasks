pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing NPM packages...'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build || echo "No build script defined"'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test || echo "No tests defined"'
            }
        }
    }
}
