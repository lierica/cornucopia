Organization.destroy_all
User.destroy_all
Need.destroy_all
Surplus.destroy_all
UserSurplus.destroy_all
SurplusNeed.destroy_all

#ORGANIZATIONS: Corporations
google = Organization.create(name: "Google", sector: "technology", description: "Google is a technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.")

unilever = Organization.create(name: "Unilever", sector: "consumer goods", description: "Unilever is a consumer goods company that is a leading producer of cleaning agents and personal care products.")

nestle = Organization.create(name: "Nestle", sector: "food and beverage", description: "Nestlé is the largest food and drink company is the world, as measured by revenues and other metrics, since 2014")

gap = Organization.create(name: "Gap", sector: "apparel", description: "Gap is an American worldwide clothing and accessories retailer.")

momofuku = Organization.create(name: "Momofuku Restaurant Group", sector: "hospitality", description: "A group of award-winning restaurants including Momofuku Noodle Bar, Momofuku Ssäm Bar, Má Pêche, Momofuku Ko, Milk Bar, and more.")

#ORGANIZATIONS: Charities
redcross = Organization.create(name: "American Red Cross", sector: "disaster relief", description: "The American Red Cross is a humanitarian organization that provides emergency assistance, disaster relief and education in the United States.")

aliforney = Organization.create(name: "Ali Forney Center", sector: "LGBT", description: "The Ali Forney Center is the largest LGBT community center helping LGBT homeless youth in the United States.")

bowerymission = Organization.create(name: "Bowery Mission", sector: "community center", description: "The Bowery Mission is a rescue mission that provides food, medical services and employment assistance to the working poor and homeless men, women, and children.")

pencilsofpromise = Organization.create(name: "Pencils of Promise", sector: "education", description: "Pencils of Promise is a for-purpose organization that builds schools, trains teachers, and funds scholarships. ")

savethechildren = Organization.create(name: "Save the Children Fund", sector: "children", description: "The Save the Children Fund is an international organization that promotes children's rights, provides relief, and helps support children in developing countries.")

##UserS

erica = User.create(first_name: "Erica", last_name: "Li", role: "Surplus Expert", email: "erica@ericali.me", phone: "7329860905", password_digest: "hello", corporation_id: google.id )

connie = User.create(first_name: "Connie", last_name: "Wang", role: "CEO", email: "connie.wang@flatironschool.com", phone: "478204583", password_digest: "world", corporation_id: unilever.id)

elli = User.create(first_name: "Ellisa", last_name: "Shim", role: "Head of Corporate Social Responsibility", email: "ellisa.shim@flatironschool.com", phone: "9472639402", password_digest: "ruby", corporation_id: nestle.id)

jon = User.create(first_name: "Jon", last_name: "Wu", role: "Assistant to the CEO", email: "jon.wu@flatironschool.com", phone: "8439448532", password_digest: "javascript", corporation_id: gap.id)

josh = User.create(first_name: "Josh", last_name: "Stillman", role: "Director of Legal", email: "josh.stillman@flatironschool.com", phone: "9372847999", password_digest: "haskell", corporation_id: momofuku.id)

paul = User.create(first_name: "Paul", last_name: "Kristapovich", role: "Donations Coordinator", email: "paul.kristapovich@flatironschool.com", phone: "3584850324", password_digest: "wisconsin", charity_id: redcross.id)

jake = User.create(first_name: "Jake", last_name: "McNaughton", role: "Head of Corporate Partnerships", email: "jake.mcnaughton@flatironschool.com", phone: "8967494568", password_digest: "snake", charity_id: aliforney.id)

seth = User.create(first_name: "Seth", last_name: "Barden", role: "Partnerships Coordinator", email: "seth.barden@flatironschool.com", phone: "7776253321", password_digest: "bass", charity_id: aliforney.id)

yuliya = User.create(first_name: "Yuliya", last_name: "Stillman", role: "Director of Legal", email: "josh.stillman@flatironschool.com", phone: "9372847999", password_digest: "haskell", charity_id: momofuku.id)

howard = User.create(first_name: "Josh", last_name: "Stillman", role: "Director of Legal", email: "josh.stillman@flatironschool.com", phone: "9372847999", password_digest: "haskell", charity_id: momofuku.id)

andrew = User.create(first_name: "Josh", last_name: "Stillman", role: "Director of Legal", email: "josh.stillman@flatironschool.com", phone: "9372847999", password_digest: "haskell", charity_id: momofuku.id)

tim = User.create(first_name: "Josh", last_name: "Stillman", role: "Director of Legal", email: "josh.stillman@flatironschool.com", phone: "9372847999", password_digest: "haskell", charity_id: momofuku.id)
