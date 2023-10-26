# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts ('started seeding')

admin = User.create( name: "leo", email: "leo@gmail.com", password: "222222")
Admin.create(user_id: admin.id)

Category.create(protected_area:"Body Protection", name: "Coveralls")
Category.create(protected_area:"Body Protection", name: "Pant & Shirts")

Category.create(protected_area:"Head Protection", name: "Vented Helmets")
Category.create(protected_area:"Head Protection", name: "Bump Caps")

Category.create(protected_area:"Eye and face Protection", name: "Goggles")
Category.create(protected_area:"Eye and face Protection", name: "Face Hood & Balaclava")

Category.create(protected_area:"Hearing Protection", name:"Ear Plugs")
Category.create(protected_area:"Hearing Protection", name:"Ear Muffs")


Category.create(protected_area:"Respiratory Protection", name:"Disposables")
Category.create(protected_area:"Fall Protection", name:"Re-Usables")

Category.create(protected_area:"Hand Protection", name:"Polymer Coated")
Category.create(protected_area:"Hand Protection", name:"Cut Resistant")

Category.create(protected_area:"Foot Protection", name:"Low Ankle Boots")
Category.create(protected_area:"Foot Protection", name:"Wielding Boot")

Category.create(protected_area:"Fire Protection", name:"Fire Fighting Boots")
Category.create(protected_area:"Fire Protection", name:"Accessories")

Color.create(name:"red")
Color.create(name:"yellow")
Color.create(name:"blue")
Color.create(name:"green")
Color.create(name:"brown")
Color.create(name:"black")
Color.create(name:"white")


puts ('completed seeding')