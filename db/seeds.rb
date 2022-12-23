# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Lister.destroy_all
User.destroy_all
Unit.destroy_all
Review.destroy_all





user1=User.create(username: "kante", location: "Kwale", email: "kante@kante", password: "1234", phone_number: 12347890)
user2=User.create(username: "kente", location: "Kilifi", email: "kente@kante", password: "4567", phone_number: 12347890)
user3=User.create(username: "kinte", location: "Mombasa", email: "kinte@kante", password: "0002a", phone_number: 12347890)
user4=User.create(username: "kunte", location: "Msambweni", email: "kunte@kante", password: "0003a", phone_number: 12347890)

lister1=Lister.create(username: "kante",image_url:"https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=600",email: "kante@kante", password: "0000a", phone_no: 12347890)
lister2=Lister.create(username: "kente", image_url:"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",email: "kente@kante", password: "0001a", phone_no: 12347890)
lister3=Lister.create(username: "kinte",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",email: "kante@kante", password: "0010a", phone_no: 12347890)
lister4=Lister.create(username: "konte", image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",email: "kente@kante", password: "0101a", phone_no: 12347890)
lister3=Lister.create(username: "kinte",image_url:"https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=600",email: "kante@kante", password: "0010a", phone_no: 12347890)
lister4=Lister.create(username: "konte", image_url:"https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600 ",email: "kente@kante", password: "0101a", phone_no: 12347890)


unit1=Unit.create(unit_number:5500,property_name:"Chandaria",property_type:"Residential",price:8000,location:"Nairobi",image_url:"https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=600",category:"bedsitter",user_id:user1.id,lister_id:lister1.id)
unit2=Unit.create(unit_number:5501,property_name:"Chandaria",property_type:"Residential",price:10000,location:"Nairobi",image_url:"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",category:"1bedroom",user_id:user2.id,lister_id:lister2.id)
unit3=Unit.create(unit_number:5502,property_name:"Elgon",property_type:"Residential",price:15000,location:"Nakuru",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",category:"2bedroom",user_id:user3.id,lister_id:lister3.id)
unit4=Unit.create(unit_number:5503,property_name:"Elmoro",property_type:"Hostel",price:10000,location:"Nakuru",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",category:"3bedroom",user_id:user4.id,lister_id:lister4.id)
unit4=Unit.create(unit_number:5502,property_name:"Eljuok",property_type:"Residential",price:15000,location:"Nakuru",image_url:"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",category:"2bedroom",user_id:user3.id,lister_id:lister3.id)
unit5=Unit.create(unit_number:5503,property_name:"Nakuru",property_type:"Hostel",price:10000,location:"Nakuru",image_url:"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",category:"3bedroom",user_id:user4.id,lister_id:lister4.id)




review1=Review.create(user_id:user1.id,description:"the owner was very cooperative",unit_id:unit1.id)
review2=Review.create(user_id:user2.id,description:"the owner was very cooperative",unit_id:unit2.id)
review3=Review.create(user_id:user3.id,description:"the owner was very cooperative",unit_id:unit3.id)

