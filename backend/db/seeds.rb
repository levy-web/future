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


prodOne = Product.create(
    name:"Safety Ventilated Helmet With Textile Ratchet Suspension", 
    weight:11 , 
    dimensions: "57.5 × 46.5 × 41 in",
    material: "Polyethylene (HDPE)",
    origin: "China",
    standards: "ANSI/ISEA Z89.1-2009, EN 397:2012, CE",
    category_id: 2 
)

prodTwo = Product.create(
    name:"DuPont Nomex Fire Retardant Coverall", 
    weight:30 , 
    dimensions: "s63 × 40 × 34 in",
    material: "Inherent FR",
    origin: "China",
    standards: "CE CAT 1, EN ISO 1149, EN ISO 11611, EN ISO 11612, EN ISO 14116",
    category_id: 1 
)

prodFour = Product.create(
    name:"Full Body Harness Integrated With Waist Comfort Belt", 
    weight:14 , 
    dimensions: "40 × 28 × 34 in",
    material: "Polyethylene (HDPE)",
    origin: "China",
    standards: "CE 0194, EN 358:1999, EN 361:2002, EN 420",
    category_id: 6
)

prodThree = Product.create(
    name:"S1P SRC, Low Ankle Suede Leather Shoe", 
    weight:20 , 
    dimensions: "61 × 44 × 33 in",
    material: "Genuine Leather",
    origin: "China",
    standards: "",
    category_id: 8
)

prodOne.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
prodTwo.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
prodThree.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
prodFour.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")

one = ProductColor.create(product_id:1, color_id:2)
two = ProductColor.create(product_id:1, color_id:1)
three= ProductColor.create(product_id:1, color_id:3)

one.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
two.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
three.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")


four= ProductColor.create(product_id:2, color_id:2)
four.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")

five = ProductColor.create(product_id:3, color_id:1)
six = ProductColor.create(product_id:3, color_id:3)
seven = ProductColor.create(product_id:3, color_id:5)
eight = ProductColor.create(product_id:3, color_id:4)

five.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
six.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
seven.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
eight.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")

nine = ProductColor.create(product_id:4, color_id:2)
ten = ProductColor.create(product_id:4, color_id:3)
eleven = ProductColor.create(product_id:4, color_id:4)
twelve = ProductColor.create(product_id:4, color_id:5)
thirteen = ProductColor.create(product_id:4, color_id:6)

nine.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
ten.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
eleven.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
twelve.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")
thirteen.image.attach(io: File.open(Rails.root.join("public/helmet.jpg")), filename: "helmet.jpg")

puts ('completed seeding')