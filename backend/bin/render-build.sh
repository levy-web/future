#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
rails db:create
rails db:seed
bundle exec rails db:migrate