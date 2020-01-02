deploy: build deploy_to_s3
	@echo "deploy finished with success"

build:
	npm run build

deploy_to_s3:
	AWS_PROFILE=lui npm run deploy -y

