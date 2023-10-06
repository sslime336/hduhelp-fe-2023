.PHONY: site
site:
	@(cd mock/ && make run) & npm run start
