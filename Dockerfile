FROM cypress/included:latest

ENV CYPRESS_BASE_URL="http://frontend:3000"

COPY . .

CMD [ "npm", "test" ]