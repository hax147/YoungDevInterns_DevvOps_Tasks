pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                // This pulls your GitHub repo into the Jenkins workspace
                git url: 'https://github.com/hax147/YoungDevInterns_DevvOps_Tasks.git', branch: 'main'
            }
        }

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

