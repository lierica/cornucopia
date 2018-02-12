
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

#Users

erica = User.create(first_name: "Erica", last_name: "Li", role: "Head of Corporate Responsibility", email: "ericaaa.li@gmail.com", password_digest: BCrypt::Password.create("123"), phone: "7329860905", organization_id: unilever.id)

justin = User.create(first_name: "Justin", last_name: "Timberlake", role: "Chief Donation Officer", email: "justin.timberlake@gmail.com", password_digest: BCrypt::Password.create("123"), phone: "1234567899", organization_id: bowerymission.id)

barack = User.create(first_name: "Barack", last_name: "Obama", role: "Supreme Do-Gooder", email: "barack.obama@gmail.com", password_digest: BCrypt::Password.create("123"), phone: "1234567899", organization_id: savethechildren.id)

#Surpluses

surplus1 = Surplus.create(title: "Chromebooks for Education", description: "Refurbished Chromebooks looking for a new home.", category: "Electronics", units: 20, unit_category: "unit", available_date: "2018-01-31", claim_by_date: "2018/06/30", location: "New York", organization_id: google.id, user_id: erica.id)

surplus2 = Surplus.create(title: "Toothpaste", description: "Some fresh Colgate MaxWhite off our production line.", category: "Personal Care", units: 5, unit_category: "box", available_date: "2018-01-31", claim_by_date: "2018/06/30", organization_id: unilever.id, user_id: erica.id)

surplus3 = Surplus.create(title: "Protein Bars", description: "Chocolate raisin protein bars. There are 20 per box.", category: "Food", units: 10, unit_category: "box", available_date: "2018-01-31", claim_by_date: "2018/06/30", location: "New York", organization_id: nestle.id, user_id: erica.id)

#Needs

need1 = Need.create(title: "Snacks for the children", description: "Some of the children attend after-school programs and they are often hungry. Looking for a healthy snack to stave their hunger.", category: "Food", units: 4, unit_category: "box", location: "New York", fulfill_by_date: "2018/03/01", organization_id: savethechildren.id, user_id: justin.id)

need2 = Need.create(title: "Breakfast foods for our residents", description: "Looking for alternatives to cereal to feed our residents.", category: "Food", location: "New York", units: 7, unit_category: "box", fulfill_by_date: "2018/03/01", organization_id: bowerymission.id, user_id: justin.id)

need3 = Need.create(title: "New computers for our classrooms", description: "The computers in our classrooms are in desperate need of an upgrade.", category: "Electronics", location: "New York", units: 20, unit_category: "unit", fulfill_by_date: "2018/03/01", organization_id: pencilsofpromise.id, user_id: justin.id)
