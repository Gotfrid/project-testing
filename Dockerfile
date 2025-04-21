FROM cypress/included:latest

ENV CYPRESS_BASE_URL="http://0.0.0.0:4173"

COPY . .

CMD [ "npm", "test" ]