pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        bat 'npx playwright install --with-deps'
      }
    }

    stage('Run cucumber-playwright tests') {
      steps {
        bat 'node -e "require(\\'fs\\').mkdirSync(\\'reports\\', { recursive: true })"'
        bat 'npm run test:cucumber:junit'
      }
    }
  }

  post {
    always {
      junit 'reports/junit.xml'
      archiveArtifacts artifacts: 'reports/**', allowEmptyArchive: true
    }
    failure {
      echo 'Build failed — check reports/junit.xml and console output'
    }
    success {
      echo 'Build succeeded'
    }
  }
}
