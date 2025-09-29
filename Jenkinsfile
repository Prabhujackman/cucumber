should i paste the below content in local drive jenkins file ? : pipeline {
  agent any
  tools {
    nodejs 'Node20'
  }

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
        bat 'if not exist reports mkdir reports'
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
