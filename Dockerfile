FROM cypress/included:latest

ENV CYPRESS_BASE_URL="http://frontend:4173"

COPY . .

CMD [ "npm", "test" ]