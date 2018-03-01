google = Organization.create(name: "Google", sector: "technology", description: "Google is a technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.", category: "corporation")

unilever = Organization.create(name: "Unilever", sector: "consumer goods", description: "Unilever is a consumer goods company that is a leading producer of cleaning agents and personal care products.", category: "corporation")

nestle = Organization.create(name: "Nestle", sector: "food and beverage", description: "Nestlé is the largest food and drink company is the world, as measured by revenues and other metrics, since 2014.", category: "corporation")

piedpiper = Organization.create(name: "Pied Piper", sector: "technology", description: "Pied Piper is the leader in file compression technology.", category: "corporation")

bluth = Organization.create(name: "The Bluth Company", sector: "real estate", description: "The Bluth Company develops real estate in the United States and Iraq.", category: "corporation")

redcross = Organization.create(name: "American Red Cross", sector: "disaster relief", description: "The American Red Cross is a humanitarian organization that provides emergency assistance, disaster relief and education in the United States.", category: "charity")

bowerymission = Organization.create(name: "Bowery Mission", sector: "community center", description: "The Bowery Mission is a rescue mission that provides food, medical services and employment assistance to the working poor and homeless men, women, and children.", category: "charity")

pencilsofpromise = Organization.create(name: "Pencils of Promise", sector: "education", description: "Pencils of Promise is a for-purpose organization that builds schools, trains teachers, and funds scholarships.", category: "charity")

habitat = Organization.create(name: "Habitat for Humanity", sector: "housing", description: "Habitat for Humanity builds simple, decent, and affordable housing for those in need.", category: "charity")

irc = Organization.create(name: "International Rescue Committee", sector: "refugees", description: "The International Rescue Committee responds to the world's worst humanitarian crises and helps people to survive and rebuild their lives.", category: "charity")

#Users

erica = User.create(first_name: "Erica", last_name: "Li", role: "Head of Corporate Responsibility", email: "ericaaa.li@gmail.com", password_digest: BCrypt::Password.create("123"), phone: "7329860905", organization_id: google.id)

barack = User.create(first_name: "Barack", last_name: "Obama", role: "Supreme Do-Gooder", email: "barack.obama@gmail.com", password_digest: BCrypt::Password.create("123"), phone: "9916003816", organization_id: redcross.id)

lauren = User.create(first_name: "Lauren", last_name: "Bart", role: "Director of Acquisition", email: "lmb54692@gmail.com", password_digest: BCrypt::Password.create("123"), phone: "6381956385", organization_id: bowerymission.id)

gabby = User.create(first_name: "Gabriella", last_name: "Roselli", role: "Vice President of Corporate Relations", email: "gabriella.roselli1@gmail.com", password_digest: BCrypt::Password.create("123"), phone: "8631256780", organization_id: pencilsofpromise.id )

gob = User.create(first_name: "Gob", last_name: "Bluth", role: "Fake CEO", email: "gob@bluth-holdings.com", password_digest: BCrypt::Password.create("123"), phone: "3495960385", organization_id: habitat.id)

jingyang = User.create(first_name: "Jing", last_name: "Yang", role: "CEO", email: "jing-yang@gmail.com", password_digest: BCrypt::Password.create("123"), phone: "9748294759", organization_id: irc.id )
