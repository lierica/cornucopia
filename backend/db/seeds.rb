UserSurplus.destroy_all
SurplusNeed.destroy_all
Organization.destroy_all
User.destroy_all
Need.destroy_all
Surplus.destroy_all


google = Organization.create(name: "Google", sector: "technology", description: "Google is a technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.", category: "corporation")

unilever = Organization.create(name: "Unilever", sector: "consumer goods", description: "Unilever is a consumer goods company that is a leading producer of cleaning agents and personal care products.", category: "corporation")

nestle = Organization.create(name: "Nestle", sector: "food and beverage", description: "Nestlé is the largest food and drink company is the world, as measured by revenues and other metrics, since 2014.", category: "corporation")

gap = Organization.create(name: "Gap", sector: "apparel", description: "Gap is an American worldwide clothing and accessories retailer.", category: "corporation")

momofuku = Organization.create(name: "Momofuku Restaurant Group", sector: "hospitality", description: "A group of award-winning restaurants including Momofuku Noodle Bar, Momofuku Ssäm Bar, Má Pêche, Momofuku Ko, Milk Bar, and more.", category: "corporation")

redcross = Organization.create(name: "American Red Cross", sector: "disaster relief", description: "The American Red Cross is a humanitarian organization that provides emergency assistance, disaster relief and education in the United States.", category: "charity")

aliforney = Organization.create(name: "Ali Forney Center", sector: "LGBT", description: "The Ali Forney Center is the largest LGBT community center helping LGBT homeless youth in the United States.", category: "charity")

bowerymission = Organization.create(name: "Bowery Mission", sector: "community center", description: "The Bowery Mission is a rescue mission that provides food, medical services and employment assistance to the working poor and homeless men, women, and children.", category: "charity")

pencilsofpromise = Organization.create(name: "Pencils of Promise", sector: "education", description: "Pencils of Promise is a for-purpose organization that builds schools, trains teachers, and funds scholarships.", category: "charity")

savethechildren = Organization.create(name: "Save the Children Fund", sector: "children", description: "The Save the Children Fund is an international organization that promotes children's rights, provides relief, and helps support children in developing countries.")

#Users

erica = User.create(first_name: "Erica", last_name: "Li", role: "Surplus Expert", email: "erica@ericali.me", phone: "7329860905", password_digest: "hello", organization_id: google.id)

connie = User.create(first_name: "Connie", last_name: "Wang", role: "CEO", email: "connie.wang@flatironschool.com", phone: "478204583", password_digest: "world", organization_id: unilever.id)

elli = User.create(first_name: "Ellisa", last_name: "Shim", role: "Head of Corporate Social Responsibility", email: "ellisa.shim@flatironschool.com", phone: "9472639402", password_digest: "ruby", organization_id: nestle.id)

jon = User.create(first_name: "Jon", last_name: "Wu", role: "Assistant to the CEO", email: "jon.wu@flatironschool.com", phone: "8439448532", password_digest: "javascript", organization_id: gap.id)

josh = User.create(first_name: "Josh", last_name: "Stillman", role: "Director of Legal", email: "josh.stillman@flatironschool.com", phone: "9372847999", password_digest: "haskell", organization_id: momofuku.id)

paul = User.create(first_name: "Paul", last_name: "Kristapovich", role: "Donations Coordinator", email: "paul.kristapovich@flatironschool.com", phone: "3584850324", password_digest: "wisconsin", organization_id: redcross.id)

jake = User.create(first_name: "Jake", last_name: "McNaughton", role: "Head of Corporate Partnerships", email: "jake.mcnaughton@flatironschool.com", phone: "8967494568", password_digest: "snake", organization_id: aliforney.id)

seth = User.create(first_name: "Seth", last_name: "Barden", role: "Partnerships Coordinator", email: "seth.barden@flatironschool.com", phone: "7776253321", password_digest: "bass", organization_id: aliforney.id)

yuliya = User.create(first_name: "Yuliya", last_name: "Yasenetska", role: "CEO", email: "yuliya.yasentska@flatironschool.com", phone: "7675323333", password_digest: "ukraine", organization_id: bowerymission.id)

howard = User.create(first_name: "Howard", last_name: "DeVennish", role: "Head of Education", email: "howard.devennish@flatironschool.com", phone: "8881234454", password_digest: "literature", organization_id: pencilsofpromise.id)

andrew = User.create(first_name: "Andrew", last_name: "Cohn", role: "Associate Educator", email: "andrew.cohn@flatironschool.com", phone: "1234153206", password_digest: "geeksquad", organization_id: savethechildren.id)

tim = User.create(first_name: "Tim", last_name: "Campbell", role: "Head of Overseas Missions", email: "tim.campbell@flatironschool.com", phone: "6524323459", password_digest: "justmarried", organization_id: savethechildren.id)

#Surpluses

surplus1 = Surplus.create(title: "Chromebooks for Education", description: "Refurbished Chromebooks looking for a new home.", category: "electronics", units: 20, unit_category: "units", available_date: "01/31/2018", organization_id: google.id, user_id: erica.id)

surplus2 = Surplus.create(title: "Toothpaste", description: "Some fresh Colgate MaxWhite off our production line.", category: "personal care", units: 5, unit_category: "boxes", available_date: "01/31/2018", organization_id: unilever.id, claimed: true, user_id: connie.id)

surplus3 = Surplus.create(title: "Protein Bars", description: "Chocolate raisin protein bars. There are 20 per box.", category: "Food", units: 10, unit_category: "boxes", available_date: "01/31/2018", organization_id: nestle.id, user_id: elli.id)

#Needs

need1 = Need.create(title: "Snacks for the children", description: "Some of the children attend after-school programs and they are often hungry. Looking for a healthy snack to stave their hunger.", category: "Food", units: 4, unit_category: "boxes", fulfill_by_date: "02/28/2018", organization_id: savethechildren.id, user_id: andrew.id)

need2 = Need.create(title: "Breakfast foods for our residents", description: "Looking for alternatives to cereal to feed our residents.", category: "Food", units: 7, unit_category: "boxes", fulfill_by_date: "03/01/2018", organization_id: bowerymission.id, user_id: yuliya.id)

need3 = Need.create(title: "New computers for our classrooms", description: "The computers in our classrooms are in desperate need of an upgrade.", category: "electronics", units: 20, unit_category: "units", fulfill_by_date: "03/01/2018", organization_id: pencilsofpromise.id, user_id: howard.id)

#surplusneeds

surplusneed1 = SurplusNeed.create(surplus_id: surplus3.id, need_id: need1.id)

#usersurplus

usersurplus1 = UserSurplus.create(user_id: andrew.id, surplus_id: surplus2.id)

usersurplus2 = UserSurplus.create(user_id: seth.id, surplus_id: surplus2.id)
