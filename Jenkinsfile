pipeline {
    agent any

    triggers {
        // Poll SCM every 5 minutes (adjust cron as needed)
        pollSCM('H/5 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your GitHub repo
                git branch: 'main', url: 'https://github.com/Prabhujackman/cucumber.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Clean workspace and install Node.js dependencies
                sh 'rm -rf node_modules'
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run cucumber-js with junit report
                sh 'mkdir -p reports'
                sh 'npm run test:cucumber:junit'
            }
        }

        stage('Publish Test Report') {
            steps {
                // Publish JUnit test results so Jenkins shows them nicely
                junit 'reports/junit.xml'
            }
        }
    }

    post {
        always {
            // Archive reports for later reference
            archiveArtifacts artifacts: 'reports/**/*.xml', allowEmptyArchive: true
        }
        failure {
            echo '❌ Build failed! Check test report.'
        }
        success {
            echo '✅ Build succeeded!'
        }
    }
}
