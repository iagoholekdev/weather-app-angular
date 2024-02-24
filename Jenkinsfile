pipeline {
    agent any

    environment {
        // Define environment variables if needed
        NODEJS_HOME = tool 'NodeJS'
        ANGULAR_CLI_HOME = tool 'Angular_CLI'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh "${NODEJS_HOME}/bin/npm install"
            }
        }

        stage('Build') {
            steps {
                // Build Angular application
                sh "${ANGULAR_CLI_HOME}/bin/ng build --prod"
            }
        }

        stage('Archive Artifacts') {
            steps {
                // Archive the build artifacts
                archiveArtifacts 'dist/**/*'
            }
        }

        stage('Deploy') {
            steps {
                // Your deployment steps go here
                // This can be copying artifacts to a server, deploying to a cloud service, etc.
                // Example: sh 'scp -r dist/* user@server:/path/to/deployment'
            }
        }

        stage('Cleanup') {
            steps {
                // Clean up workspace or perform any cleanup steps
                deleteDir()
            }
        }
    }

    post {
        success {
            // Actions to perform on successful build
            echo 'Build successful!'

            // You can trigger additional actions here, like sending notifications, etc.
        }
        failure {
            // Actions to perform on build failure
            echo 'Build failed!'

            // You can trigger additional actions here, like sending notifications, etc.
        }
    }
}
