.PHONY: site dev
site:
	@(cd mock/ && make run) & npm run start

dev:
	@(cd mock-rs/ && cargo run) & npm run start
