.PHONY: site
site:
	@(cd mock/ && make run) & yarn dev