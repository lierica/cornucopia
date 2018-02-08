google = Organization.create(name: "Google", sector: "technology", description: "Google is a technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.", category: "corporation")

unilever = Organization.create(name: "Unilever", sector: "consumer goods", description: "Unilever is a consumer goods company that is a leading producer of cleaning agents and personal care products.", category: "corporation")

nestle = Organization.create(name: "Nestle", sector: "food and beverage", description: "Nestlé is the largest food and drink company is the world, as measured by revenues and other metrics, since 2014.", category: "corporation")

gap = Organization.create(name: "Gap", sector: "apparel", description: "Gap is an American worldwide clothing and accessories retailer.", category: "corporation")

momofuku = Organization.create(name: "Momofuku Restaurant Group", sector: "hospitality", description: "A group of award-winning restaurants including Momofuku Noodle Bar, Momofuku Ssäm Bar, Má Pêche, Momofuku Ko, Milk Bar, and more.", category: "corporation")

redcross = Organization.create(name: "American Red Cross", sector: "disaster relief", description: "The American Red Cross is a humanitarian organization that provides emergency assistance, disaster relief and education in the United States.", category: "charity")

aliforney = Organization.create(name: "Ali Forney Center", sector: "LGBT", description: "The Ali Forney Center is the largest LGBT community center helping LGBT homeless youth in the United States.", category: "charity")

bowerymission = Organization.create(name: "Bowery Mission", sector: "community center", description: "The Bowery Mission is a rescue mission that provides food, medical services and employment assistance to the working poor and homeless men, women, and children.", category: "charity")

pencilsofpromise = Organization.create(name: "Pencils of Promise", sector: "education", description: "Pencils of Promise is a for-purpose organization that builds schools, trains teachers, and funds scholarships.", category: "charity")

savethechildren = Organization.create(name: "Save the Children Fund", sector: "children", description: "The Save the Children Fund is an international organization that promotes children's rights, provides relief, and helps support children in developing countries.", category:"charity")

#Surpluses

surplus1 = Surplus.create(title: "Chromebooks for Education", description: "Refurbished Chromebooks looking for a new home.", category: "electronics", units: 20, unit_category: "units", available_date: "01/31/2018", organization_id: google.id, user_id: 1)

surplus2 = Surplus.create(title: "Toothpaste", description: "Some fresh Colgate MaxWhite off our production line.", category: "personal care", units: 5, unit_category: "boxes", available_date: "01/31/2018", organization_id: unilever.id, claimed: true, user_id: 1)

surplus3 = Surplus.create(title: "Protein Bars", description: "Chocolate raisin protein bars. There are 20 per box.", category: "Food", units: 10, unit_category: "boxes", available_date: "01/31/2018", organization_id: nestle.id, user_id: 1)

#Needs

need1 = Need.create(title: "Snacks for the children", description: "Some of the children attend after-school programs and they are often hungry. Looking for a healthy snack to stave their hunger.", category: "Food", units: 4, unit_category: "boxes", fulfill_by_date: "02/28/2018", organization_id: savethechildren.id, user_id: 2)

need2 = Need.create(title: "Breakfast foods for our residents", description: "Looking for alternatives to cereal to feed our residents.", category: "Food", units: 7, unit_category: "boxes", fulfill_by_date: "03/01/2018", organization_id: bowerymission.id, user_id: 2)

need3 = Need.create(title: "New computers for our classrooms", description: "The computers in our classrooms are in desperate need of an upgrade.", category: "electronics", units: 20, unit_category: "units", fulfill_by_date: "03/01/2018", organization_id: pencilsofpromise.id, user_id: 2)

#surplusneeds

surplusneed1 = SurplusNeed.create(surplus_id: 1, need_id: 1)

#usersurplusneed

usersurplusneed1 = UserSurplusNeed.create(user_id: 1, surplus_id: 1, need_id: 1)

usersurplusneed2 = UserSurplusNeed.create(user_id: 2, surplus_id: 2, need_id: 2)
