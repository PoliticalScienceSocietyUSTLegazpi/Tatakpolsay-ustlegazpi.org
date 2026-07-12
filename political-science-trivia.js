// ===========================
// RANDOM BACKGROUND
// ===========================

const triviaBackgrounds = [
    "images2/political-trivia/Political-trivia1.jpg",
    "images2/political-trivia/Political-trivia2.jpg",
    "images2/political-trivia/Political-trivia3.jpg"
];

// Preload images
triviaBackgrounds.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Random background
const randomTriviaBg =
    triviaBackgrounds[Math.floor(Math.random() * triviaBackgrounds.length)];

document.body.style.setProperty(
    "--trivia-bg",
    `url("${randomTriviaBg}")`
);

const triviaFacts = [
    {
        category: "Political Science",
        fact: "Political Science is the systematic study of politics, government, public policy, political behavior, and political institutions."
    },
    {
        category: "Political Science",
        fact: "Political Science students develop skills in research, public speaking, policy analysis, leadership, and critical thinking."
    },
    {
        category: "Governance",
        fact: "Governance refers to the process of decision-making and the implementation of those decisions by governments and institutions."
    },
    {
        category: "Governance",
        fact: "The eight major principles of good governance are participation, rule of law, transparency, responsiveness, consensus orientation, equity, effectiveness and efficiency, and accountability."
    },
    {
        category: "Philippine Constitution",
        fact: "The Philippines has had three constitutions since independence: the 1935 Constitution, the 1973 Constitution, and the current 1987 Constitution."
    },
    {
        category: "Philippine Constitution",
        fact: "The 1987 Constitution was drafted after the People Power Revolution and restored democratic institutions in the Philippines."
    },
    {
        category: "Elections & Democracy",
        fact: "The Commission on Elections (COMELEC) is the independent constitutional body responsible for administering Philippine elections."
    },
    {
        category: "Elections & Democracy",
        fact: "Democracy means that sovereignty resides in the people, who exercise it directly or through elected representatives."
    },
    {
        category: "International Relations",
        fact: "International Relations examines how states, international organizations, and non-state actors interact globally."
    },
    {
        category: "International Relations",
        fact: "The United Nations was founded in 1945 to promote international peace, security, cooperation, and human rights."
    },
    {
        category: "Philippine Government",
        fact: "The Philippine government operates under three co-equal branches: Executive, Legislative, and Judiciary."
    },
    {
        category: "Philippine Government",
        fact: "The principle of checks and balances prevents any one branch of government from becoming too powerful."
    },

// =========================
// Political Science
// =========================

{
    category: "Political Science",
    fact: "Political Science is one of the oldest social sciences, with roots tracing back to Ancient Greece."
},
{
    category: "Political Science",
    fact: "Aristotle is widely regarded as the 'Father of Political Science' because of his systematic study of politics."
},
{
    category: "Political Science",
    fact: "Political Science has five major fields: Political Theory, Comparative Politics, International Relations, Public Administration, and Public Law."
},
{
    category: "Political Science",
    fact: "Political scientists study how governments work, why conflicts occur, and how public policies affect society."
},

{
    category: "Political Science",
    fact: "Political Science studies power, authority, government, public policy, political behavior, and political institutions."
},
{
    category: "Political Science",
    fact: "Political Science is considered a social science because it studies human behavior, society, and political relationships."
},
{
    category: "Political Science",
    fact: "The word politics comes from the Greek word polis, which means city-state."
},
{
    category: "Political Science",
    fact: "Political Theory is a branch of Political Science that studies ideas such as justice, liberty, equality, power, and rights."
},
{
    category: "Political Science",
    fact: "Comparative Politics studies and compares political systems, governments, institutions, and political behavior across countries."
},
{
    category: "Political Science",
    fact: "International Relations is a major field of Political Science that studies relations among states, international organizations, and global actors."
},
{
    category: "Political Science",
    fact: "Public Administration focuses on how government policies are implemented and how public institutions are managed."
},
{
    category: "Political Science",
    fact: "Public Policy studies how governments identify problems, create solutions, and evaluate the effects of policy decisions."
},
{
    category: "Political Science",
    fact: "Political Science uses both qualitative and quantitative research methods to study political events and behavior."
},
{
    category: "Political Science",
    fact: "Surveys, interviews, case studies, content analysis, and statistical data are commonly used in Political Science research."
},
{
    category: "Political Science",
    fact: "Political behavior studies how individuals and groups participate in politics, including voting, campaigning, protesting, and joining organizations."
},
{
    category: "Political Science",
    fact: "Political institutions include structures such as legislatures, courts, executives, political parties, and election bodies."
},
{
    category: "Political Science",
    fact: "Political culture refers to the shared beliefs, values, and attitudes people have toward politics and government."
},
{
    category: "Political Science",
    fact: "Political socialization is the process by which people develop political beliefs, values, and opinions."
},
{
    category: "Political Science",
    fact: "Family, school, media, religion, and peer groups can influence a person’s political socialization."
},
{
    category: "Political Science",
    fact: "A state is commonly understood as having four elements: population, territory, government, and sovereignty."
},
{
    category: "Political Science",
    fact: "Sovereignty means the supreme authority of a state to govern itself without external control."
},
{
    category: "Political Science",
    fact: "Government is the institution through which the state creates and enforces laws and policies."
},
{
    category: "Political Science",
    fact: "Power is a central concept in Political Science because politics often involves influencing decisions and behavior."
},
{
    category: "Political Science",
    fact: "Authority refers to power that is viewed as legitimate or accepted by the people."
},
{
    category: "Political Science",
    fact: "Legitimacy means that citizens generally recognize and accept the right of a government or institution to rule."
},
{
    category: "Political Science",
    fact: "Political Science helps explain why governments succeed, fail, change, or face conflict."
},
{
    category: "Political Science",
    fact: "Political Science is useful for careers in law, public service, diplomacy, policy research, journalism, advocacy, and education."
},
{
    category: "Political Science",
    fact: "Political scientists often study elections to understand voter behavior, political participation, and democratic representation."
},
{
    category: "Political Science",
    fact: "Constitutional studies are part of Political Science because constitutions define government powers, limits, and citizens’ rights."
},
{
    category: "Political Science",
    fact: "Political Science examines both formal politics, such as elections and laws, and informal politics, such as influence, lobbying, and public opinion."
},
{
    category: "Political Science",
    fact: "Political Science is connected to history, economics, sociology, philosophy, law, and international studies."
},
{
    category: "Political Science",
    fact: "Political Science does not only study politicians; it also studies citizens, institutions, policies, ideologies, and political systems."
},
{
    category: "Political Science",
    fact: "Studying Political Science helps students understand governance, civic responsibility, democracy, rights, and public decision-making."
},
{
    category: "Political Science",
    fact: "Philippine politics is a major area of study in Political Science programs in the Philippines."
},
{
    category: "Political Science",
    fact: "Political Science studies how Philippine political institutions developed from the colonial period to the present."
},
{
    category: "Political Science",
    fact: "The American colonial period influenced the development of elections and representative institutions in the Philippines."
},
{
    category: "Political Science",
    fact: "Political Science examines patron-client relationships in Philippine political life."
},
{
    category: "Political Science",
    fact: "Clientelism refers to political support exchanged for favors, benefits, or assistance."
},
{
    category: "Political Science",
    fact: "Political dynasties are studied because they affect political competition and representation."
},
{
    category: "Political Science",
    fact: "Personality-centered politics is often examined in studies of Philippine elections."
},
{
    category: "Political Science",
    fact: "Party switching is a common topic in studies of Philippine party politics."
},
{
    category: "Political Science",
    fact: "The term balimbing is commonly used in Philippine politics to describe politicians who change political alliances."
},
{
    category: "Political Science",
    fact: "Coalition-building is studied because parties and candidates often cooperate during elections and governance."
},
{
    category: "Political Science",
    fact: "Political Science examines how campaign strategies influence voter behavior."
},
{
    category: "Political Science",
    fact: "Political communication studies how political messages are delivered through speeches, media, and social platforms."
},
{
    category: "Political Science",
    fact: "Social media has become an important subject in Philippine political communication."
},
{
    category: "Political Science",
    fact: "Political Science studies disinformation because false political information can influence public opinion."
},
{
    category: "Political Science",
    fact: "Public opinion surveys are studied because they measure political attitudes and voter preferences."
},
{
    category: "Political Science",
    fact: "Political Science examines how media coverage shapes public understanding of politics."
},
{
    category: "Political Science",
    fact: "Civil society groups are studied because they influence public debate and government action."
},
{
    category: "Political Science",
    fact: "People Power is studied as an example of mass political mobilization in the Philippines."
},
{
    category: "Political Science",
    fact: "Political Science studies social movements that seek reforms in law, governance, rights, or policy."
},
{
    category: "Political Science",
    fact: "Youth organizations are studied as examples of civic and political participation."
},
{
    category: "Political Science",
    fact: "Student councils can be studied as examples of youth leadership and political participation."
},
{
    category: "Political Science",
    fact: "Political Science examines participation outside elections, such as petitions, consultations, advocacy, and public forums."
},
{
    category: "Political Science",
    fact: "Political Science studies the relationship between national decisions and local community needs."
},
{
    category: "Political Science",
    fact: "Center-local relations examine how national and local governments interact."
},
{
    category: "Political Science",
    fact: "Regional autonomy is studied as a response to diversity, conflict, and self-governance concerns."
},
{
    category: "Political Science",
    fact: "The Bangsamoro peace process is studied as part of conflict resolution and autonomy politics."
},
{
    category: "Political Science",
    fact: "Political Science studies nationalism as a force that shapes identity, policy, and state-building."
},
{
    category: "Political Science",
    fact: "Language, religion, ethnicity, and region can influence political identity."
},
{
    category: "Political Science",
    fact: "Nation-building refers to strengthening unity, institutions, and citizenship."
},
{
    category: "Political Science",
    fact: "Political reform movements seek changes in institutions, laws, or public policies."
},
{
    category: "Political Science",
    fact: "Constitutional reform debates are studied as part of Philippine political development."
},
{
    category: "Political Science",
    fact: "Federalism proposals are studied in discussions on Philippine political reform."
},
{
    category: "Political Science",
    fact: "Agenda-setting explains how issues become priorities for public discussion and government action."
},
{
    category: "Political Science",
    fact: "Political Science studies how laws and policies affect different sectors of society."
},
{
    category: "Political Science",
    fact: "Policy implementation examines whether government programs are carried out effectively."
},
{
    category: "Political Science",
    fact: "Policy evaluation determines whether public programs achieve their intended goals."
},
{
    category: "Political Science",
    fact: "Evidence-based policymaking uses research, data, and analysis to guide public decisions."
},
{
    category: "Political Science",
    fact: "Political economy studies how politics and economic decisions influence each other."
},
{
    category: "Political Science",
    fact: "Poverty and inequality are studied as political issues connected to policy and governance."
},
{
    category: "Political Science",
    fact: "Development policy is studied because government decisions affect social and economic progress."
},
{
    category: "Political Science",
    fact: "Public budgeting is studied because budgets reveal government priorities."
},
{
    category: "Political Science",
    fact: "Taxation is studied as a political issue because it affects citizens, businesses, and public services."
},
{
    category: "Political Science",
    fact: "Bureaucratic behavior is studied to understand how government offices implement decisions."
},
{
    category: "Political Science",
    fact: "Administrative reform is studied as a way to improve public service delivery."
},
{
    category: "Political Science",
    fact: "Legislative committees are studied because they help examine bills, policies, and public issues."
},
{
    category: "Political Science",
    fact: "Oversight is studied as a way for institutions to monitor government actions."
},
{
    category: "Political Science",
    fact: "Court decisions can affect politics when they settle issues involving rights, powers, or public policy."
},
{
    category: "Political Science",
    fact: "Judicial independence is studied as an important feature of democratic institutions."
},
{
    category: "Political Science",
    fact: "Independent commissions are studied because they help protect accountability and democratic processes."
},
{
    category: "Political Science",
    fact: "Civil-military relations study the role of the military in a democratic state."
},
{
    category: "Political Science",
    fact: "Civilian supremacy over the military is an important concept in Philippine political studies."
},
{
    category: "Political Science",
    fact: "Peace and order are studied as public issues connected to governance, rights, and security."
},
{
    category: "Political Science",
    fact: "Human security focuses on protecting people from threats to safety and welfare."
},
{
    category: "Political Science",
    fact: "Disaster governance is studied because public institutions respond to natural hazards and emergencies."
},
{
    category: "Political Science",
    fact: "Climate politics studies how environmental issues require public decisions and government action."
},
{
    category: "Political Science",
    fact: "Migration is studied because overseas work and citizenship issues affect Philippine society and policy."
},
{
    category: "Political Science",
    fact: "Diaspora politics studies how Filipinos abroad can influence national issues and public debate."
},
{
    category: "Political Science",
    fact: "Foreign policy is studied as the way the Philippines defines its interests in the international community."
},
{
    category: "Political Science",
    fact: "Territorial disputes are studied because they involve sovereignty, diplomacy, security, and international law."
},
{
    category: "Political Science",
    fact: "ASEAN is studied as part of the Philippines’ regional political and diplomatic environment."
},
{
    category: "Political Science",
    fact: "Global governance studies how international organizations influence domestic and foreign policy choices."
},
{
    category: "Political Science",
    fact: "Leadership ethics is studied because public officials make decisions that affect citizens and institutions."
},
{
    category: "Political Science",
    fact: "Informed citizenship is studied as a foundation of democratic participation."
},
{
    category: "Political Science",
    fact: "Political Science examines how democratic institutions adapt to social and technological change."
},
{
    category: "Political Science",
    fact: "Political Science studies how political institutions contribute to peace, order, and national development."
},

// =========================
// Governance
// =========================

{
    category: "Governance",
    fact: "Transparency is considered one of the most important principles of good governance because it promotes public trust."
},
{
    category: "Governance",
    fact: "Accountability means public officials are responsible for their actions and decisions."
},
{
    category: "Governance",
    fact: "Good governance encourages citizen participation in decision-making processes."
},
{
    category: "Governance",
    fact: "The World Bank defines governance as the way power is exercised in managing a country's economic and social resources."
},
{
    category: "Governance",
    fact: "The Philippines is a democratic and republican state where sovereignty resides in the people."
},
{
    category: "Governance",
    fact: "The 1987 Constitution requires the State to ensure the autonomy of local governments."
},
{
    category: "Governance",
    fact: "Philippine local government units include provinces, cities, municipalities, and barangays."
},
{
    category: "Governance",
    fact: "The barangay is the smallest local government unit in the Philippines."
},
{
    category: "Governance",
    fact: "The Local Government Code of 1991 strengthened decentralization in the Philippines."
},
{
    category: "Governance",
    fact: "Decentralization gives local government units more powers, responsibilities, and resources."
},
{
    category: "Governance",
    fact: "Barangays are led by a Punong Barangay, commonly called the Barangay Captain."
},
{
    category: "Governance",
    fact: "Each barangay has a Sangguniang Barangay that helps create local ordinances."
},
{
    category: "Governance",
    fact: "The Sangguniang Kabataan represents youth participation in barangay governance."
},
{
    category: "Governance",
    fact: "Local autonomy allows local government units to address the needs of their own communities."
},
{
    category: "Governance",
    fact: "The Department of the Interior and Local Government supervises local governments in the Philippines."
},
{
    category: "Governance",
    fact: "The Philippine government is divided into national and local levels of governance."
},
{
    category: "Governance",
    fact: "Accountability in Philippine governance means public officials may be held responsible for their actions."
},
{
    category: "Governance",
    fact: "Transparency in governance helps citizens monitor government programs, budgets, and decisions."
},
{
    category: "Governance",
    fact: "Citizen participation is important in barangay assemblies, public consultations, and local planning."
},
{
    category: "Governance",
    fact: "Barangay assemblies allow residents to discuss local issues and community concerns."
},
{
    category: "Governance",
    fact: "Local ordinances are rules created by local legislative bodies for their communities."
},
{
    category: "Governance",
    fact: "Mayors serve as chief executives of cities and municipalities in the Philippines."
},
{
    category: "Governance",
    fact: "Governors serve as chief executives of provinces in the Philippines."
},
{
    category: "Governance",
    fact: "Local councils help approve ordinances, resolutions, and local budgets."
},
{
    category: "Governance",
    fact: "Public service is a public trust under the 1987 Philippine Constitution."
},
{
    category: "Governance",
    fact: "The Constitution says public officers must serve the people with responsibility, integrity, loyalty, and efficiency."
},
{
    category: "Governance",
    fact: "The Commission on Audit examines how public funds are used by government agencies."
},
{
    category: "Governance",
    fact: "The Civil Service Commission helps promote merit, fitness, and professionalism in public service."
},
{
    category: "Governance",
    fact: "The Office of the Ombudsman investigates complaints against public officials and employees."
},
{
    category: "Governance",
    fact: "Checks and balances help prevent abuse of power in Philippine governance."
},
{
    category: "Governance",
    fact: "Good governance in the Philippines requires transparency, accountability, participation, and rule of law."
},
{
    category: "Governance",
    fact: "Local development councils help plan development programs at different levels of local government."
},
{
    category: "Governance",
    fact: "Devolution allows certain national government functions to be transferred to local government units."
},
{
    category: "Governance",
    fact: "Effective governance depends not only on leaders but also on active and informed citizens."
},
{
    category: "Governance",
    fact: "The National Economic and Development Authority coordinates socioeconomic planning in the Philippines."
},
{
    category: "Governance",
    fact: "The Department of Budget and Management helps prepare and manage the national government budget."
},
{
    category: "Governance",
    fact: "The Department of Finance manages government revenue policy and public finance."
},
{
    category: "Governance",
    fact: "The Bureau of Internal Revenue is the main tax collection agency of the Philippine government."
},
{
    category: "Governance",
    fact: "The Bureau of Customs collects customs duties and taxes on imported goods."
},
{
    category: "Governance",
    fact: "The Philippine Statistics Authority provides official statistics used for planning and policymaking."
},
{
    category: "Governance",
    fact: "The National Anti-Poverty Commission coordinates poverty reduction efforts across government sectors."
},
{
    category: "Governance",
    fact: "The Philippine Development Plan serves as a medium-term guide for national development priorities."
},
{
    category: "Governance",
    fact: "Government budgeting is a major governance process because it determines how public funds are allocated."
},
{
    category: "Governance",
    fact: "Public procurement refers to the process by which government buys goods, services, and infrastructure projects."
},
{
    category: "Governance",
    fact: "The Government Procurement Reform Act governs public procurement in the Philippines."
},
{
    category: "Governance",
    fact: "Competitive bidding is the general rule in Philippine government procurement."
},
{
    category: "Governance",
    fact: "The Government Procurement Policy Board helps formulate procurement policies in the Philippines."
},
{
    category: "Governance",
    fact: "The annual national budget is known as the General Appropriations Act once enacted into law."
},
{
    category: "Governance",
    fact: "Performance-based budgeting links government spending with expected outputs and results."
},
{
    category: "Governance",
    fact: "The Seal of Good Local Governance recognizes local governments that meet standards of good performance."
},
{
    category: "Governance",
    fact: "Citizen’s Charters inform the public about government services, requirements, fees, and processing times."
},
{
    category: "Governance",
    fact: "The Anti-Red Tape Act aims to improve government service delivery and reduce bureaucratic delay."
},
{
    category: "Governance",
    fact: "The Ease of Doing Business law strengthened reforms against red tape in government transactions."
},
{
    category: "Governance",
    fact: "The Anti-Red Tape Authority monitors compliance with ease of doing business reforms."
},
{
    category: "Governance",
    fact: "Freedom of Information policies allow citizens to request access to government information, subject to limitations."
},
{
    category: "Governance",
    fact: "Open data promotes transparency by making government information accessible to the public."
},
{
    category: "Governance",
    fact: "Participatory governance allows citizens and civil society groups to take part in public decision-making."
},
{
    category: "Governance",
    fact: "Public consultations help government agencies gather feedback before adopting policies or programs."
},
{
    category: "Governance",
    fact: "Stakeholder participation is important in governance because public policies affect different groups."
},
{
    category: "Governance",
    fact: "The Philippine government uses national agencies and local governments to deliver public services."
},
{
    category: "Governance",
    fact: "Frontline government services include permits, licenses, certificates, records, and public assistance."
},
{
    category: "Governance",
    fact: "E-governance uses digital tools to improve access to government services and information."
},
{
    category: "Governance",
    fact: "Online government portals help citizens access public services without going directly to offices."
},
{
    category: "Governance",
    fact: "Digitalization in governance can reduce processing time and improve public service efficiency."
},
{
    category: "Governance",
    fact: "The Philippine Identification System provides a national ID system for Filipino citizens and resident aliens."
},
{
    category: "Governance",
    fact: "The Department of Information and Communications Technology supports digital transformation in government."
},
{
    category: "Governance",
    fact: "Data privacy is important in governance because government agencies handle personal information."
},
{
    category: "Governance",
    fact: "The National Privacy Commission helps enforce data privacy rules in the Philippines."
},
{
    category: "Governance",
    fact: "Disaster risk reduction is a governance responsibility shared by national agencies and local governments."
},
{
    category: "Governance",
    fact: "The National Disaster Risk Reduction and Management Council coordinates disaster preparedness and response."
},
{
    category: "Governance",
    fact: "Local governments prepare disaster risk reduction and management plans for their communities."
},
{
    category: "Governance",
    fact: "Climate change adaptation is part of governance because public institutions plan for environmental risks."
},
{
    category: "Governance",
    fact: "The Climate Change Commission coordinates climate policy in the Philippines."
},
{
    category: "Governance",
    fact: "Environmental governance involves managing natural resources, pollution control, and environmental protection."
},
{
    category: "Governance",
    fact: "The Department of Environment and Natural Resources leads environmental management in the Philippines."
},
{
    category: "Governance",
    fact: "Health governance became especially important during public health emergencies such as the COVID-19 pandemic."
},
{
    category: "Governance",
    fact: "The Department of Health leads national health policy and public health programs."
},
{
    category: "Governance",
    fact: "Education governance involves planning, funding, and managing public education systems."
},
{
    category: "Governance",
    fact: "The Department of Education manages basic education in the Philippines."
},
{
    category: "Governance",
    fact: "The Commission on Higher Education oversees higher education institutions in the Philippines."
},
{
    category: "Governance",
    fact: "The Technical Education and Skills Development Authority manages technical-vocational education and training."
},
{
    category: "Governance",
    fact: "Urban governance deals with issues such as housing, transportation, land use, and public safety."
},
{
    category: "Governance",
    fact: "Metropolitan governance is important in areas where cities and municipalities share common problems."
},
{
    category: "Governance",
    fact: "The Metropolitan Manila Development Authority coordinates metro-wide services in Metro Manila."
},
{
    category: "Governance",
    fact: "Rural governance focuses on agriculture, livelihood, infrastructure, and basic services in rural communities."
},
{
    category: "Governance",
    fact: "The Department of Agriculture leads national programs related to farming, fisheries, and food production."
},
{
    category: "Governance",
    fact: "Food security is a governance issue because it involves production, distribution, prices, and public welfare."
},
{
    category: "Governance",
    fact: "Social welfare governance includes programs for vulnerable sectors such as children, older persons, and low-income families."
},
{
    category: "Governance",
    fact: "The Department of Social Welfare and Development leads social protection programs in the Philippines."
},
{
    category: "Governance",
    fact: "Indigenous peoples’ governance includes recognition of ancestral domains and cultural communities."
},
{
    category: "Governance",
    fact: "The National Commission on Indigenous Peoples addresses concerns involving indigenous cultural communities."
},
{
    category: "Governance",
    fact: "Gender-responsive governance considers the different needs and experiences of women, men, and gender-diverse citizens."
},
{
    category: "Governance",
    fact: "The Philippine Commission on Women promotes gender equality and women’s empowerment in governance."
},
{
    category: "Governance",
    fact: "Peace governance involves institutions and policies that address conflict, reconciliation, and development."
},
{
    category: "Governance",
    fact: "The Office of the Presidential Adviser on Peace, Reconciliation and Unity supports peace processes in the Philippines."
},
{
    category: "Governance",
    fact: "Regional development councils coordinate planning and development priorities in Philippine regions."
},
{
    category: "Governance",
    fact: "Government monitoring and evaluation help determine whether public programs are effective."
},
{
    category: "Governance",
    fact: "Policy coordination is necessary when multiple agencies work on the same public problem."
},
{
    category: "Governance",
    fact: "Government monitoring and evaluation helps agencies assess whether public programs meet their targets."
},

// =========================
// Philippine Constitution
// =========================

{
    category: "Philippine Constitution",
    fact: "The 1987 Philippine Constitution is the current supreme law of the Republic of the Philippines."
},
{
    category: "Philippine Constitution",
    fact: "The Philippine Constitution is divided into 18 Articles."
},
{
    category: "Philippine Constitution",
    fact: "The Bill of Rights is found in Article III of the 1987 Constitution."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution guarantees freedoms such as speech, religion, and peaceful assembly."
},
{
    category: "Philippine Constitution",
    fact: "The 1987 Constitution was ratified by the Filipino people on February 2, 1987."
},
{
    category: "Philippine Constitution",
    fact: "The 1987 Constitution replaced the 1973 Constitution."
},
{
    category: "Philippine Constitution",
    fact: "The Philippines has had three main constitutions in the modern republic: the 1935, 1973, and 1987 Constitutions."
},
{
    category: "Philippine Constitution",
    fact: "The 1987 Constitution restored democratic institutions after the 1986 People Power Revolution."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution states that no person shall be deprived of life, liberty, or property without due process of law."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution declares that public office is a public trust."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution provides for three branches of government: Executive, Legislative, and Judicial."
},
{
    category: "Philippine Constitution",
    fact: "The President exercises executive power under the 1987 Constitution."
},
{
    category: "Philippine Constitution",
    fact: "Legislative power is vested in the Congress of the Philippines, composed of the Senate and the House of Representatives."
},
{
    category: "Philippine Constitution",
    fact: "Judicial power is vested in the Supreme Court and lower courts established by law."
},
{
    category: "Philippine Constitution",
    fact: "The President of the Philippines serves a single six-year term under the 1987 Constitution."
},
{
    category: "Philippine Constitution",
    fact: "The 1987 Constitution prohibits the President from being re-elected."
},
{
    category: "Philippine Constitution",
    fact: "Senators in the Philippines serve six-year terms."
},
{
    category: "Philippine Constitution",
    fact: "Members of the House of Representatives serve three-year terms."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution recognizes the principle of separation of powers among the three branches of government."
},
{
    category: "Philippine Constitution",
    fact: "Checks and balances allow each branch of government to limit the powers of the others."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution recognizes civilian authority as supreme over the military."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution states that the Philippines renounces war as an instrument of national policy."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution adopts the generally accepted principles of international law as part of Philippine law."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution protects the right of the people to information on matters of public concern."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution guarantees the right of the people to peaceably assemble and petition the government."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution guarantees freedom of expression, speech, and of the press."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution protects the free exercise of religion."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution provides that no law shall be passed abridging freedom of speech, expression, or the press."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution requires that education be given priority by the State."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution recognizes the family as the foundation of the nation."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution recognizes the vital role of the youth in nation-building."
},
{
    category: "Philippine Constitution",
    fact: "The Preamble of the 1987 Constitution begins with 'We, the sovereign Filipino people.'"
},
{
    category: "Philippine Constitution",
    fact: "Article I of the Constitution defines the national territory of the Philippines."
},
{
    category: "Philippine Constitution",
    fact: "The national territory includes the Philippine archipelago, its terrestrial, fluvial, and aerial domains, including its waters, seabed, subsoil, and airspace."
},
{
    category: "Philippine Constitution",
    fact: "Article II contains the Declaration of Principles and State Policies."
},
{
    category: "Philippine Constitution",
    fact: "The separation of Church and State is inviolable under the Constitution."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution requires the State to maintain honesty and integrity in public service."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution adopts a policy of full public disclosure in transactions involving public interest."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution recognizes the right of the people to a balanced and healthful ecology."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution recognizes the rights of indigenous cultural communities."
},
{
    category: "Philippine Constitution",
    fact: "The Bill of Rights guarantees equal protection of the laws."
},
{
    category: "Philippine Constitution",
    fact: "The Bill of Rights protects people against unreasonable searches and seizures."
},
{
    category: "Philippine Constitution",
    fact: "The privacy of communication and correspondence is protected by the Constitution."
},
{
    category: "Philippine Constitution",
    fact: "No law impairing the obligation of contracts shall be passed."
},
{
    category: "Philippine Constitution",
    fact: "The liberty of abode and the right to travel are protected by the Constitution."
},
{
    category: "Philippine Constitution",
    fact: "The right to bail shall not be impaired even when the privilege of the writ of habeas corpus is suspended."
},
{
    category: "Philippine Constitution",
    fact: "An accused person is presumed innocent until proven guilty."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution guarantees the right to a speedy disposition of cases."
},
{
    category: "Philippine Constitution",
    fact: "No person shall be detained solely by reason of political beliefs."
},
{
    category: "Philippine Constitution",
    fact: "Involuntary servitude is prohibited, except as punishment for a crime."
},
{
    category: "Philippine Constitution",
    fact: "No person shall be imprisoned for debt or non-payment of a poll tax."
},
{
    category: "Philippine Constitution",
    fact: "Ex post facto laws and bills of attainder are prohibited."
},
{
    category: "Philippine Constitution",
    fact: "Article IV of the Constitution defines Philippine citizenship."
},
{
    category: "Philippine Constitution",
    fact: "Natural-born citizens are citizens of the Philippines from birth without having to perform any act to acquire citizenship."
},
{
    category: "Philippine Constitution",
    fact: "Dual allegiance of citizens is declared inimical to national interest and shall be dealt with by law."
},
{
    category: "Philippine Constitution",
    fact: "Article V governs suffrage in the Philippines."
},
{
    category: "Philippine Constitution",
    fact: "Filipino citizens who are at least eighteen years old may vote if they meet constitutional requirements."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution prohibits literacy, property, or other substantive requirements for voting."
},
{
    category: "Philippine Constitution",
    fact: "Article VI establishes the Congress of the Philippines."
},
{
    category: "Philippine Constitution",
    fact: "Congress is composed of the Senate and the House of Representatives."
},
{
    category: "Philippine Constitution",
    fact: "The Senate is composed of 24 senators elected at large."
},
{
    category: "Philippine Constitution",
    fact: "The House of Representatives includes district representatives and party-list representatives."
},
{
    category: "Philippine Constitution",
    fact: "A senator cannot serve more than two consecutive terms."
},
{
    category: "Philippine Constitution",
    fact: "A member of the House of Representatives cannot serve more than three consecutive terms."
},
{
    category: "Philippine Constitution",
    fact: "Appropriation, revenue, and tariff bills must originate exclusively in the House of Representatives."
},
{
    category: "Philippine Constitution",
    fact: "The President may veto a bill passed by Congress."
},
{
    category: "Philippine Constitution",
    fact: "Congress may override a presidential veto by a two-thirds vote of all members of each House."
},
{
    category: "Philippine Constitution",
    fact: "No law shall grant a title of royalty or nobility."
},
{
    category: "Philippine Constitution",
    fact: "Article VII covers the Executive Department."
},
{
    category: "Philippine Constitution",
    fact: "The Vice President has the same qualifications and term of office as the President."
},
{
    category: "Philippine Constitution",
    fact: "The President controls all executive departments, bureaus, and offices."
},
{
    category: "Philippine Constitution",
    fact: "The President is the Commander-in-Chief of all armed forces of the Philippines."
},
{
    category: "Philippine Constitution",
    fact: "The President may suspend the privilege of the writ of habeas corpus or place the Philippines under martial law under constitutional limits."
},
{
    category: "Philippine Constitution",
    fact: "Treaties require the concurrence of at least two-thirds of all senators."
},
{
    category: "Philippine Constitution",
    fact: "Article VIII covers the Judicial Department."
},
{
    category: "Philippine Constitution",
    fact: "Judicial power includes the duty to determine grave abuse of discretion by any branch or instrumentality of government."
},
{
    category: "Philippine Constitution",
    fact: "The Supreme Court is composed of one Chief Justice and fourteen Associate Justices."
},
{
    category: "Philippine Constitution",
    fact: "Members of the Supreme Court hold office until age seventy or until they become incapacitated."
},
{
    category: "Philippine Constitution",
    fact: "The judiciary enjoys fiscal autonomy under the Constitution."
},
{
    category: "Philippine Constitution",
    fact: "Article IX creates the Constitutional Commissions."
},
{
    category: "Philippine Constitution",
    fact: "The Constitutional Commissions are the Civil Service Commission, Commission on Elections, and Commission on Audit."
},
{
    category: "Philippine Constitution",
    fact: "Members of Constitutional Commissions are appointed for seven years without reappointment."
},
{
    category: "Philippine Constitution",
    fact: "The Civil Service Commission is the central personnel agency of the government."
},
{
    category: "Philippine Constitution",
    fact: "The Commission on Elections enforces and administers election laws."
},
{
    category: "Philippine Constitution",
    fact: "The Commission on Audit examines government revenues, expenditures, and use of public funds."
},
{
    category: "Philippine Constitution",
    fact: "Article X covers Local Government."
},
{
    category: "Philippine Constitution",
    fact: "The President exercises general supervision over local governments."
},
{
    category: "Philippine Constitution",
    fact: "Local government units may create their own sources of revenue subject to law."
},
{
    category: "Philippine Constitution",
    fact: "The Constitution provides for autonomous regions in Muslim Mindanao and the Cordilleras."
},
{
    category: "Philippine Constitution",
    fact: "Article XI covers accountability of public officers."
},
{
    category: "Philippine Constitution",
    fact: "The President, Vice President, Supreme Court members, Constitutional Commission members, and Ombudsman may be removed by impeachment."
},
{
    category: "Philippine Constitution",
    fact: "The House of Representatives has the exclusive power to initiate impeachment cases."
},
{
    category: "Philippine Constitution",
    fact: "The Senate has the sole power to try and decide impeachment cases."
},
{
    category: "Philippine Constitution",
    fact: "The Office of the Ombudsman may investigate improper, illegal, or unjust acts of public officials and employees."
},
{
    category: "Philippine Constitution",
    fact: "Article XII covers National Economy and Patrimony."
},
{
    category: "Philippine Constitution",
    fact: "All lands of the public domain, waters, minerals, and other natural resources are owned by the State."
},
{
    category: "Philippine Constitution",
    fact: "The exploration and use of natural resources are under the full control and supervision of the State."
},
{
    category: "Philippine Constitution",
    fact: "Article XVII provides the methods for amending or revising the Constitution."
},

// =========================
// Elections & Democracy
// =========================

{
    category: "Elections & Democracy",
    fact: "The Philippines holds national and local elections every three years."
},
{
    category: "Elections & Democracy",
    fact: "Presidential elections in the Philippines are held every six years."
},
{
    category: "Elections & Democracy",
    fact: "The Philippines uses an automated election system through vote-counting machines."
},
{
    category: "Elections & Democracy",
    fact: "The right to vote is one of the fundamental political rights guaranteed by the Constitution."
},

{
    category: "Elections & Democracy",
    fact: "The Philippines is a democratic and republican state where sovereignty resides in the people."
},
{
    category: "Elections & Democracy",
    fact: "Elections allow Filipino citizens to choose leaders and participate in democratic governance."
},
{
    category: "Elections & Democracy",
    fact: "The Commission on Elections, or COMELEC, is the constitutional body that administers elections in the Philippines."
},
{
    category: "Elections & Democracy",
    fact: "The right to vote in the Philippines is protected by the 1987 Constitution."
},
{
    category: "Elections & Democracy",
    fact: "Filipino citizens who are at least 18 years old and meet legal requirements may vote in elections."
},
{
    category: "Elections & Democracy",
    fact: "The President and Vice President of the Philippines are elected separately."
},
{
    category: "Elections & Democracy",
    fact: "The President of the Philippines serves a single six-year term."
},
{
    category: "Elections & Democracy",
    fact: "Senators in the Philippines are elected nationwide."
},
{
    category: "Elections & Democracy",
    fact: "The Senate has 24 members."
},
{
    category: "Elections & Democracy",
    fact: "Local elections in the Philippines allow citizens to choose governors, mayors, vice mayors, and local council members."
},
{
    category: "Elections & Democracy",
    fact: "Barangay elections allow citizens to choose barangay officials who govern the smallest local government unit."
},
{
    category: "Elections & Democracy",
    fact: "The Sangguniang Kabataan gives Filipino youth a role in local democratic participation."
},
{
    category: "Elections & Democracy",
    fact: "Democracy depends not only on voting, but also on active citizenship, accountability, and public participation."
},
{
    category: "Elections & Democracy",
    fact: "Political parties help organize candidates, platforms, and political participation in elections."
},
{
    category: "Elections & Democracy",
    fact: "A free and fair election requires transparency, credible vote counting, and protection of voters’ rights."
},
{
    category: "Elections & Democracy",
    fact: "COMELEC is one of the three Constitutional Commissions under the 1987 Constitution."
},
{
    category: "Elections & Democracy",
    fact: "COMELEC has the power to register political parties, organizations, and coalitions participating in elections."
},
{
    category: "Elections & Democracy",
    fact: "The 1987 Constitution gives COMELEC the power to enforce and administer election laws."
},
{
    category: "Elections & Democracy",
    fact: "Suffrage in the Philippines may be exercised by citizens who meet the qualifications set by the Constitution."
},
{
    category: "Elections & Democracy",
    fact: "The Constitution prohibits literacy, property, or similar requirements for voting."
},
{
    category: "Elections & Democracy",
    fact: "Voter registration is required before a Filipino citizen can vote in an election."
},
{
    category: "Elections & Democracy",
    fact: "Regular national elections in the Philippines are held on the second Monday of May."
},
{
    category: "Elections & Democracy",
    fact: "The President-elect officially assumes office at noon on June 30 following the election."
},
{
    category: "Elections & Democracy",
    fact: "The Vice President-elect also assumes office at noon on June 30 after the election."
},
{
    category: "Elections & Democracy",
    fact: "The Philippines uses the plurality voting system for electing the President and Vice President."
},
{
    category: "Elections & Democracy",
    fact: "Senators are elected at large by voters nationwide."
},
{
    category: "Elections & Democracy",
    fact: "Twelve senators are elected every three years."
},
{
    category: "Elections & Democracy",
    fact: "A senator may serve up to two consecutive terms."
},
{
    category: "Elections & Democracy",
    fact: "Members of the House of Representatives are elected through legislative districts and the party-list system."
},
{
    category: "Elections & Democracy",
    fact: "District representatives are elected by voters in their congressional districts."
},
{
    category: "Elections & Democracy",
    fact: "Party-list representatives are elected through a system of proportional representation."
},
{
    category: "Elections & Democracy",
    fact: "The party-list system aims to give representation to marginalized and underrepresented sectors."
},
{
    category: "Elections & Democracy",
    fact: "A member of the House of Representatives may serve up to three consecutive terms."
},
{
    category: "Elections & Democracy",
    fact: "Governors and vice governors are elected by voters in their provinces."
},
{
    category: "Elections & Democracy",
    fact: "Mayors and vice mayors are elected by voters in their cities or municipalities."
},
{
    category: "Elections & Democracy",
    fact: "Barangay officials are elected separately from national and local officials."
},
{
    category: "Elections & Democracy",
    fact: "The Sangguniang Kabataan election allows qualified youth voters to elect youth officials."
},
{
    category: "Elections & Democracy",
    fact: "Election campaigns allow candidates to present platforms, programs, and qualifications to voters."
},
{
    category: "Elections & Democracy",
    fact: "Campaign periods are regulated by COMELEC."
},
{
    category: "Elections & Democracy",
    fact: "Vote buying is prohibited under Philippine election laws."
},
{
    category: "Elections & Democracy",
    fact: "Election offenses may include vote buying, coercion, fraud, and unlawful campaigning."
},
{
    category: "Elections & Democracy",
    fact: "Precincts are voting units where registered voters cast their ballots."
},
{
    category: "Elections & Democracy",
    fact: "A voter must usually vote in the precinct where they are registered."
},
{
    category: "Elections & Democracy",
    fact: "Election returns contain the results of voting in a precinct."
},
{
    category: "Elections & Democracy",
    fact: "Canvassing is the official process of totaling election results."
},
{
    category: "Elections & Democracy",
    fact: "The winners of elections are proclaimed after the official canvass of votes."
},
{
    category: "Elections & Democracy",
    fact: "Poll watchers may observe voting and counting to help protect election integrity."
},
{
    category: "Elections & Democracy",
    fact: "Election observation helps promote transparency and public confidence in elections."
},
{
    category: "Elections & Democracy",
    fact: "The secrecy of the ballot protects voters from pressure and retaliation."
},
{
    category: "Elections & Democracy",
    fact: "A clean voters' list is important for credible elections."
},
{
    category: "Elections & Democracy",
    fact: "Political parties nominate or support candidates for public office."
},
{
    category: "Elections & Democracy",
    fact: "Independent candidates may run for public office if they meet legal requirements."
},
{
    category: "Elections & Democracy",
    fact: "Election platforms help voters compare the goals and programs of candidates."
},
{
    category: "Elections & Democracy",
    fact: "Democratic elections require meaningful choices among candidates or parties."
},
{
    category: "Elections & Democracy",
    fact: "Peaceful transfer of power is an important feature of democracy."
},
{
    category: "Elections & Democracy",
    fact: "Public debates can help voters evaluate candidates and their positions."
},
{
    category: "Elections & Democracy",
    fact: "Voter education helps citizens understand election rules, rights, and responsibilities."
},
{
    category: "Elections & Democracy",
    fact: "Civic education strengthens democratic participation beyond election day."
},
{
    category: "Elections & Democracy",
    fact: "Democracy requires respect for majority rule and protection of minority rights."
},
{
    category: "Elections & Democracy",
    fact: "Accountability is a democratic principle because elected officials must answer to the people."
},
{
    category: "Elections & Democracy",
    fact: "Transparency in elections helps citizens trust the electoral process."
},
{
    category: "Elections & Democracy",
    fact: "Inclusive elections allow qualified citizens to participate regardless of social status."
},
{
    category: "Elections & Democracy",
    fact: "Election laws regulate campaign spending to promote fairness among candidates."
},
{
    category: "Elections & Democracy",
    fact: "Campaign finance rules help monitor the use of money in elections."
},
{
    category: "Elections & Democracy",
    fact: "Political advertisements are regulated during election periods."
},
{
    category: "Elections & Democracy",
    fact: "Misinformation during elections can affect voter judgment and democratic participation."
},
{
    category: "Elections & Democracy",
    fact: "Social media has become an important campaign tool in Philippine elections."
},
{
    category: "Elections & Democracy",
    fact: "Election surveys measure voter preferences at a specific time."
},
{
    category: "Elections & Democracy",
    fact: "Exit polls ask voters about their choices after they cast their ballots."
},
{
    category: "Elections & Democracy",
    fact: "Democratic participation includes voting, volunteering, joining discussions, and monitoring public officials."
},
{
    category: "Elections & Democracy",
    fact: "The right to peaceful assembly supports democratic participation."
},
{
    category: "Elections & Democracy",
    fact: "Freedom of speech allows citizens to discuss public issues and criticize government actions."
},
{
    category: "Elections & Democracy",
    fact: "A free press helps citizens receive information needed for democratic decision-making."
},
{
    category: "Elections & Democracy",
    fact: "The Philippines uses a presidential democratic system."
},
{
    category: "Elections & Democracy",
    fact: "In a presidential system, the president is elected separately from the legislature."
},
{
    category: "Elections & Democracy",
    fact: "Local democracy allows communities to choose leaders closer to their everyday concerns."
},
{
    category: "Elections & Democracy",
    fact: "Barangay elections are important because barangay officials handle many community-level concerns."
},
{
    category: "Elections & Democracy",
    fact: "Recall is a democratic mechanism that may allow voters to remove certain local officials before the end of their term."
},
{
    category: "Elections & Democracy",
    fact: "Initiative allows citizens to directly propose laws or constitutional amendments under legal procedures."
},
{
    category: "Elections & Democracy",
    fact: "Referendum allows voters to approve or reject a law or measure."
},
{
    category: "Elections & Democracy",
    fact: "Plebiscite allows voters to approve or reject changes such as constitutional amendments or local government changes."
},
{
    category: "Elections & Democracy",
    fact: "The Constitution recognizes the role of people’s organizations in democratic participation."
},
{
    category: "Elections & Democracy",
    fact: "Civil society groups may monitor elections, educate voters, and advocate reforms."
},
{
    category: "Elections & Democracy",
    fact: "Electoral reform aims to improve the fairness, transparency, and credibility of elections."
},
{
    category: "Elections & Democracy",
    fact: "Automated elections were adopted to speed up vote counting and transmission of results."
},
{
    category: "Elections & Democracy",
    fact: "Manual voting was used in Philippine elections before the nationwide use of automated election technology."
},
{
    category: "Elections & Democracy",
    fact: "Overseas voting allows qualified Filipinos abroad to participate in national elections."
},
{
    category: "Elections & Democracy",
    fact: "Absentee voting allows certain qualified voters to vote even when they cannot vote in their regular polling place."
},
{
    category: "Elections & Democracy",
    fact: "Election protests allow candidates to challenge election results through legal procedures."
},
{
    category: "Elections & Democracy",
    fact: "The Presidential Electoral Tribunal handles contests involving the election of the President or Vice President."
},
{
    category: "Elections & Democracy",
    fact: "The Senate Electoral Tribunal handles contests involving the election, returns, and qualifications of senators."
},
{
    category: "Elections & Democracy",
    fact: "The House of Representatives Electoral Tribunal handles contests involving members of the House of Representatives."
},
{
    category: "Elections & Democracy",
    fact: "A functioning democracy depends on citizens who are informed, active, and willing to hold leaders accountable."
},
{
    category: "Elections & Democracy",
    fact: "Elections are not only about choosing leaders; they also allow citizens to express approval or rejection of government performance."
},

// =========================
// International Relations
// =========================

{
    category: "International Relations",
    fact: "The Association of Southeast Asian Nations (ASEAN) was established in 1967."
},
{
    category: "International Relations",
    fact: "The Philippines is one of the five founding members of ASEAN."
},
{
    category: "International Relations",
    fact: "The International Court of Justice is the principal judicial organ of the United Nations."
},
{
    category: "International Relations",
    fact: "Diplomacy is one of the primary tools used by states to maintain peaceful international relations."
},

{
    category: "International Relations",
    fact: "International Relations studies how states, international organizations, and global actors interact with one another."
},
{
    category: "International Relations",
    fact: "The Philippines is one of the founding members of the United Nations."
},
{
    category: "International Relations",
    fact: "The Philippines is one of the founding members of ASEAN, which was established in 1967."
},
{
    category: "International Relations",
    fact: "ASEAN promotes regional cooperation among Southeast Asian countries."
},
{
    category: "International Relations",
    fact: "Diplomacy is the official way states communicate, negotiate, and maintain peaceful relations."
},
{
    category: "International Relations",
    fact: "The Department of Foreign Affairs manages the foreign relations of the Philippines."
},
{
    category: "International Relations",
    fact: "Embassies represent a country in another state and help protect the interests of citizens abroad."
},
{
    category: "International Relations",
    fact: "Treaties are formal agreements between states and may cover trade, defense, migration, environment, and human rights."
},
{
    category: "International Relations",
    fact: "International law helps regulate relations between states and international organizations."
},
{
    category: "International Relations",
    fact: "The Philippines follows an independent foreign policy under the 1987 Constitution."
},
{
    category: "International Relations",
    fact: "The West Philippine Sea is an important issue in Philippine foreign policy and international law."
},
{
    category: "International Relations",
    fact: "The United Nations was founded in 1945 to promote peace, security, cooperation, and human rights."
},
{
    category: "International Relations",
    fact: "The International Court of Justice is the principal judicial organ of the United Nations."
},
{
    category: "International Relations",
    fact: "NATO is a military alliance formed in 1949 among North American and European countries."
},
{
    category: "International Relations",
    fact: "Soft power refers to influence through culture, values, diplomacy, and attraction rather than force."
},
{
    category: "International Relations",
    fact: "The Department of Foreign Affairs was established on July 4, 1946, following Philippine independence."
},
{
    category: "International Relations",
    fact: "Article II, Section 7 of the 1987 Constitution provides that the State shall pursue an independent foreign policy."
},
{
    category: "International Relations",
    fact: "Philippine foreign policy gives importance to national sovereignty, territorial integrity, national interest, and self-determination."
},
{
    category: "International Relations",
    fact: "The Philippines was among the 51 original members of the United Nations in 1945."
},
{
    category: "International Relations",
    fact: "The Philippines was one of only four Asian countries among the original United Nations members in 1945."
},
{
    category: "International Relations",
    fact: "Carlos P. Romulo served as President of the United Nations General Assembly from 1949 to 1950."
},
{
    category: "International Relations",
    fact: "The ASEAN Declaration, also known as the Bangkok Declaration, was signed on August 8, 1967."
},
{
    category: "International Relations",
    fact: "The ASEAN motto is 'One Vision, One Identity, One Community.'"
},
{
    category: "International Relations",
    fact: "The five founding members of ASEAN were Indonesia, Malaysia, the Philippines, Singapore, and Thailand."
},
{
    category: "International Relations",
    fact: "ASEAN promotes cooperation among Southeast Asian countries."
},
{
    category: "International Relations",
    fact: "ASEAN cooperation includes political, security, economic, social, and cultural concerns."
},
{
    category: "International Relations",
    fact: "The ASEAN Secretariat is located in Jakarta, Indonesia."
},
{
    category: "International Relations",
    fact: "The Philippines participates in ASEAN meetings to discuss regional cooperation and shared concerns."
},
{
    category: "International Relations",
    fact: "The Philippines is part of the ASEAN Political-Security Community."
},
{
    category: "International Relations",
    fact: "The Philippines is part of the ASEAN Economic Community."
},
{
    category: "International Relations",
    fact: "The Philippines is part of the ASEAN Socio-Cultural Community."
},
{
    category: "International Relations",
    fact: "The Philippines has diplomatic relations with many countries through embassies and consulates."
},
{
    category: "International Relations",
    fact: "Philippine embassies represent the country in foreign states."
},
{
    category: "International Relations",
    fact: "Philippine consulates assist Filipino citizens abroad and provide consular services."
},
{
    category: "International Relations",
    fact: "Passports, visas, and assistance to nationals are common consular concerns."
},
{
    category: "International Relations",
    fact: "Overseas Filipino workers are an important concern in Philippine foreign policy."
},
{
    category: "International Relations",
    fact: "The protection of Filipinos overseas is one of the major concerns of Philippine diplomacy."
},
{
    category: "International Relations",
    fact: "Labor migration affects Philippine relations with host countries."
},
{
    category: "International Relations",
    fact: "Remittances from Filipinos abroad are an important part of the Philippine economy."
},
{
    category: "International Relations",
    fact: "The West Philippine Sea is a major issue in Philippine foreign policy."
},
{
    category: "International Relations",
    fact: "The West Philippine Sea issue involves sovereignty, maritime rights, diplomacy, and international law."
},
{
    category: "International Relations",
    fact: "The Philippines brought the South China Sea arbitration case against China under the United Nations Convention on the Law of the Sea."
},
{
    category: "International Relations",
    fact: "The 2016 arbitral ruling favored several Philippine claims in the South China Sea case."
},
{
    category: "International Relations",
    fact: "The United Nations Convention on the Law of the Sea is important to Philippine maritime claims."
},
{
    category: "International Relations",
    fact: "An exclusive economic zone gives a coastal state rights over resources within a maritime area under international law."
},
{
    category: "International Relations",
    fact: "Diplomacy allows states to settle disputes without using force."
},
{
    category: "International Relations",
    fact: "Bilateral relations refer to relations between two countries."
},
{
    category: "International Relations",
    fact: "Multilateral relations involve three or more states or international organizations."
},
{
    category: "International Relations",
    fact: "The six official languages of the United Nations are Arabic, Chinese, English, French, Russian, and Spanish."
},
{
    category: "International Relations",
    fact: "ASEAN currently has ten member states."
},
{
    category: "International Relations",
    fact: "International organizations help states cooperate on issues such as peace, health, migration, environment, and development."
},
{
    category: "International Relations",
    fact: "Treaties are formal agreements between states under international law."
},
{
    category: "International Relations",
    fact: "The Senate of the Philippines must concur in treaties for them to be valid and effective domestically."
},
{
    category: "International Relations",
    fact: "Foreign policy refers to the strategies a state uses in dealing with other countries."
},
{
    category: "International Relations",
    fact: "National interest is a key concept in Philippine foreign policy."
},
{
    category: "International Relations",
    fact: "Territorial integrity is a major concern in Philippine foreign relations."
},
{
    category: "International Relations",
    fact: "Sovereignty is central to the way the Philippines relates with other states."
},
{
    category: "International Relations",
    fact: "International law regulates relations among states and international actors."
},
{
    category: "International Relations",
    fact: "Customary international law is based on general and consistent state practice accepted as law."
},
{
    category: "International Relations",
    fact: "Diplomatic immunity protects diplomats from certain legal actions in host countries."
},
{
    category: "International Relations",
    fact: "Ambassadors are official representatives of one state to another."
},
{
    category: "International Relations",
    fact: "A foreign service officer represents the Philippines in diplomatic and consular work."
},
{
    category: "International Relations",
    fact: "The concept of soft power was introduced by political scientist Joseph S. Nye Jr."
},
{
    category: "International Relations",
    fact: "Hard power refers to influence through military or economic pressure."
},
{
    category: "International Relations",
    fact: "Smart power combines diplomatic, economic, cultural, and security tools."
},
{
    category: "International Relations",
    fact: "Public diplomacy involves communicating with foreign publics to build understanding and goodwill."
},
{
    category: "International Relations",
    fact: "Cultural diplomacy uses arts, education, heritage, and exchange programs to build international relations."
},
{
    category: "International Relations",
    fact: "Economic diplomacy promotes trade, investment, tourism, and economic cooperation."
},
{
    category: "International Relations",
    fact: "Defense diplomacy involves cooperation on security, military training, and regional stability."
},
{
    category: "International Relations",
    fact: "The Philippines has defense relations with the United States through treaty-based cooperation."
},
{
    category: "International Relations",
    fact: "The Mutual Defense Treaty between the Philippines and the United States was signed in 1951."
},
{
    category: "International Relations",
    fact: "The Visiting Forces Agreement governs the presence of United States military personnel during approved activities in the Philippines."
},
{
    category: "International Relations",
    fact: "The Enhanced Defense Cooperation Agreement allows agreed locations for defense cooperation between the Philippines and the United States."
},
{
    category: "International Relations",
    fact: "The Philippines participates in international peace and security discussions through the United Nations."
},
{
    category: "International Relations",
    fact: "International Relations is an academic field within Political Science."
},
{
    category: "International Relations",
    fact: "Globalization affects International Relations by increasing connections among economies, cultures, and governments."
},
{
    category: "International Relations",
    fact: "Climate change is an international issue because its effects cross national borders."
},
{
    category: "International Relations",
    fact: "The Philippines participates in international climate agreements and negotiations."
},
{
    category: "International Relations",
    fact: "Humanitarian assistance is part of international cooperation during disasters and emergencies."
},
{
    category: "International Relations",
    fact: "International migration is studied because people, labor, rights, and citizenship cross borders."
},
{
    category: "International Relations",
    fact: "Refugees are protected under international law when they flee persecution or serious threats."
},
{
    category: "International Relations",
    fact: "International trade affects Philippine relations with major partners in Asia, America, and Europe."
},
{
    category: "International Relations",
    fact: "Foreign direct investment is an important concern in economic relations between states."
},
{
    category: "International Relations",
    fact: "The Philippines maintains relations with neighboring countries to manage shared maritime, economic, and security concerns."
},
{
    category: "International Relations",
    fact: "Regional cooperation helps Southeast Asian countries respond to transnational problems."
},
{
    category: "International Relations",
    fact: "Transnational problems include terrorism, trafficking, cybercrime, pandemics, and climate risks."
},
{
    category: "International Relations",
    fact: "Cybersecurity has become an important issue in international relations."
},
{
    category: "International Relations",
    fact: "Health diplomacy became more visible during global health emergencies such as the COVID-19 pandemic."
},
{
    category: "International Relations",
    fact: "Multilateral diplomacy allows the Philippines to work with many countries at the same time."
},
{
    category: "International Relations",
    fact: "Bilateral diplomacy allows the Philippines to address specific issues with one country."
},
{
    category: "International Relations",
    fact: "Regional diplomacy allows the Philippines to work with neighboring countries on shared concerns."
},
{
    category: "International Relations",
    fact: "International Relations helps explain how Philippine domestic issues can be affected by global events."
},
{
    category: "International Relations",
    fact: "Foreign policy decisions can affect trade, security, migration, environment, and the welfare of Filipinos abroad."
}, 

// =========================
// Philippine Government
// =========================

{
    category: "Philippine Government",
    fact: "The President of the Philippines serves a single six-year term."
},
{
    category: "Philippine Government",
    fact: "The Senate of the Philippines consists of 24 senators elected nationwide."
},
{
    category: "Philippine Government",
    fact: "Members of the House of Representatives serve three-year terms."
},
{
    category: "Philippine Government",
    fact: "The Supreme Court is the highest judicial body in the Philippines."
},

{
    category: "Philippine Government",
    fact: "The Philippine government has three co-equal branches: Executive, Legislative, and Judiciary."
},
{
    category: "Philippine Government",
    fact: "The Executive Branch is headed by the President of the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Legislative Branch is composed of the Senate and the House of Representatives."
},
{
    category: "Philippine Government",
    fact: "The Judiciary interprets laws and settles legal disputes through the courts."
},
{
    category: "Philippine Government",
    fact: "The Supreme Court is located in Manila."
},
{
    category: "Philippine Government",
    fact: "The President serves as both Head of State and Head of Government."
},
{
    category: "Philippine Government",
    fact: "The Vice President is elected separately from the President in the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Senate holds sessions at the GSIS Building in Pasay City."
},
{
    category: "Philippine Government",
    fact: "The House of Representatives includes district representatives and party-list representatives."
},
{
    category: "Philippine Government",
    fact: "Local government units in the Philippines include provinces, cities, municipalities, and barangays."
},
{
    category: "Philippine Government",
    fact: "Barangays are the smallest local government units in the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Commission on Audit checks how public funds are used by government agencies."
},
{
    category: "Philippine Government",
    fact: "The Civil Service Commission oversees the merit system and professionalism in public service."
},
{
    category: "Philippine Government",
    fact: "Checks and balances help prevent any one branch of the Philippine government from becoming too powerful."
},
{
    category: "Philippine Government",
    fact: "The Senate Blue Ribbon Committee investigates alleged fraud, corruption, and irregularities involving government officials and public funds in aid of legislation."
},
{
    category: "Philippine Government",
    fact: "Cabinet secretaries head the executive departments of the Philippine government."
},
{
    category: "Philippine Government",
    fact: "The Department of Education (DepEd) manages basic education in the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Commission on Higher Education (CHED) supervises higher education institutions in the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Technical Education and Skills Development Authority (TESDA) oversees technical and vocational education and training."
},
{
    category: "Philippine Government",
    fact: "The Department of Health (DOH) is responsible for protecting and promoting public health."
},
{
    category: "Philippine Government",
    fact: "The Department of Justice (DOJ) serves as the principal law agency of the Philippine government."
},
{
    category: "Philippine Government",
    fact: "The Department of Foreign Affairs (DFA) manages the Philippines' diplomatic relations with other countries."
},
{
    category: "Philippine Government",
    fact: "The Department of National Defense (DND) is responsible for national security and defense policy."
},
{
    category: "Philippine Government",
    fact: "The Armed Forces of the Philippines (AFP) is responsible for defending the country's sovereignty and territorial integrity."
},
{
    category: "Philippine Government",
    fact: "The Philippine National Police (PNP) is responsible for maintaining peace and order and enforcing the law."
},
{
    category: "Philippine Government",
    fact: "The National Security Council advises the President on matters affecting national security and defense."
},
{
    category: "Philippine Government",
    fact: "The Commission on Appointments confirms certain presidential appointments under the Constitution."
},
{
    category: "Philippine Government",
    fact: "The House Committee on Good Government and Public Accountability conducts investigations in aid of legislation in the House of Representatives."
},
{
    category: "Philippine Government",
    fact: "The Bureau of Corrections (BuCor) manages national penitentiaries and correctional institutions."
},
{
    category: "Philippine Government",
    fact: "The Bureau of Internal Revenue (BIR) is the government's principal tax collection agency."
},
{
    category: "Philippine Government",
    fact: "The Bureau of Customs (BOC) regulates imports and exports and collects customs duties."
},
{
    category: "Philippine Government",
    fact: "The Bangko Sentral ng Pilipinas (BSP) is the central bank of the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Philippine Statistics Authority (PSA) conducts the national census and produces official government statistics."
},
{
    category: "Philippine Government",
    fact: "The National Economic and Development Authority (NEDA) serves as the country's primary socioeconomic planning agency."
},
{
    category: "Philippine Government",
    fact: "The Department of Finance (DOF) manages the government's fiscal policies and public finances."
},
{
    category: "Philippine Government",
    fact: "The Department of Budget and Management (DBM) prepares the National Expenditure Program for Congress."
},
{
    category: "Philippine Government",
    fact: "The General Appropriations Act is the annual law that authorizes government spending."
},
{
    category: "Philippine Government",
    fact: "Government-Owned and Controlled Corporations (GOCCs) are corporations created by law to perform public functions."
},
{
    category: "Philippine Government",
    fact: "The Government Service Insurance System (GSIS) provides social insurance benefits to government employees."
},
{
    category: "Philippine Government",
    fact: "The Social Security System (SSS) provides social insurance coverage primarily for private-sector workers."
},
{
    category: "Philippine Government",
    fact: "PhilHealth administers the National Health Insurance Program."
},
{
    category: "Philippine Government",
    fact: "The Home Development Mutual Fund, commonly known as Pag-IBIG Fund, provides housing savings and loan programs."
},
{
    category: "Philippine Government",
    fact: "The Official Gazette serves as the official journal of the Republic of the Philippines for publishing laws and executive issuances."
},
{
    category: "Philippine Government",
    fact: "The Professional Regulation Commission (PRC) administers licensure examinations for many professions in the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Land Transportation Office (LTO) is responsible for vehicle registration and driver licensing."
},
{
    category: "Philippine Government",
    fact: "The Land Transportation Franchising and Regulatory Board (LTFRB) regulates public land transportation services."
},
{
    category: "Philippine Government",
    fact: "The Department of Public Works and Highways (DPWH) constructs and maintains national roads and bridges."
},
{
    category: "Philippine Government",
    fact: "The Department of Agriculture (DA) promotes agricultural development and food security."
},
{
    category: "Philippine Government",
    fact: "The Department of Environment and Natural Resources (DENR) manages the country's natural resources and environmental protection."
},
{
    category: "Philippine Government",
    fact: "The Department of Labor and Employment (DOLE) promotes employment opportunities and protects workers' rights."
},
{
    category: "Philippine Government",
    fact: "The Department of Social Welfare and Development (DSWD) implements social protection and poverty reduction programs."
},
{
    category: "Philippine Government",
    fact: "The Department of Tourism (DOT) promotes the Philippines as a tourist destination."
},
{
    category: "Philippine Government",
    fact: "The Department of Trade and Industry (DTI) promotes business development, consumer welfare, and investments."
},
{
    category: "Philippine Government",
    fact: "The Department of Information and Communications Technology (DICT) leads the government's digital transformation initiatives."
},
{
    category: "Philippine Government",
    fact: "The Senate Blue Ribbon Committee is one of the standing committees of the Senate of the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Philippine Competition Commission enforces the Philippine Competition Act to promote fair competition and prevent anti-competitive business practices."
},
{
    category: "Philippine Government",
    fact: "The National Historical Commission of the Philippines (NHCP) promotes Philippine history and preserves historical heritage."
},
{
    category: "Philippine Government",
    fact: "The National Archives of the Philippines preserves important government records and historical documents."
},
{
    category: "Philippine Government",
    fact: "The Presidential Anti-Corruption Commission was created in 2017 to investigate corruption complaints against presidential appointees and was abolished in 2022."
},
{
    category: "Philippine Government",
    fact: "The Maritime Industry Authority (MARINA) regulates the Philippine maritime industry."
},
{
    category: "Philippine Government",
    fact: "The Civil Aviation Authority of the Philippines (CAAP) regulates civil aviation and airport safety."
},
{
    category: "Philippine Government",
    fact: "The Philippine Space Agency (PhilSA) was established in 2019 to develop the country's space program."
},
{
    category: "Philippine Government",
    fact: "The Anti-Red Tape Authority (ARTA) promotes efficient government services by reducing bureaucratic delays."
},
{
    category: "Philippine Government",
    fact: "The Philippine government publishes newly enacted Republic Acts after they are signed into law or allowed to lapse into law."
},
{
    category: "Philippine Government",
    fact: "Senate committee hearings conducted by the Blue Ribbon Committee are generally open to the public unless the committee decides otherwise."
},
{
    category: "Philippine Government",
    fact: "The Sandiganbayan is a special appellate collegial court that hears graft and corruption cases involving public officials."
},
{
    category: "Philippine Government",
    fact: "The National Telecommunications Commission regulates telecommunications and broadcasting services in the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Energy Regulatory Commission regulates the electric power industry in the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Department of Energy prepares and implements energy policies, plans, and programs."
},
{
    category: "Philippine Government",
    fact: "The Philippine Atmospheric, Geophysical and Astronomical Services Administration provides weather forecasts and climate information."
},
{
    category: "Philippine Government",
    fact: "The Philippine Institute of Volcanology and Seismology monitors volcanoes, earthquakes, and tsunamis."
},
{
    category: "Philippine Government",
    fact: "The Department of Science and Technology leads science, technology, and innovation programs in the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Food and Drug Administration regulates food, drugs, cosmetics, medical devices, and health products."
},
{
    category: "Philippine Government",
    fact: "The Presidential Legislative Liaison Office serves as the link between the Executive Branch and Congress."
},
{
    category: "Philippine Government",
    fact: "The National Intelligence Coordinating Agency is the Philippine government's primary intelligence agency."
},
{
    category: "Philippine Government",
    fact: "The Civil Service Commission conducts eligibility examinations for entry into government service."
},
{
    category: "Philippine Government",
    fact: "The Commission on Elections maintains the list of registered voters."
},
{
    category: "Philippine Government",
    fact: "The Commission on Audit issues audit reports on government agencies and public funds."
},
{
    category: "Philippine Government",
    fact: "The Office of the Solicitor General represents the Republic of the Philippines in many legal cases."
},
{
    category: "Philippine Government",
    fact: "The Public Attorney's Office provides free legal assistance to qualified indigent clients."
},
{
    category: "Philippine Government",
    fact: "The National Bureau of Investigation conducts investigations and forensic services under the Department of Justice."
},
{
    category: "Philippine Government",
    fact: "The Philippine Drug Enforcement Agency is the lead agency for enforcing anti-drug laws."
},
{
    category: "Philippine Government",
    fact: "The National Police Commission administers and controls the Philippine National Police."
},
{
    category: "Philippine Government",
    fact: "The Philippine Constitution created three independent Constitutional Commissions: the Civil Service Commission, Commission on Elections, and Commission on Audit."
},
{
    category: "Philippine Government",
    fact: "The Commission on Appointments is composed of members from both the Senate and the House of Representatives."
},
{
    category: "Philippine Government",
    fact: "The Ombudsman is constitutionally independent from the Executive, Legislative, and Judicial branches."
},
{
    category: "Philippine Government",
    fact: "The Commission on Audit audits all government agencies, including government-owned and controlled corporations."
},
{
    category: "Philippine Government",
    fact: "The National Housing Authority implements government housing programs."
},
{
    category: "Philippine Government",
    fact: "The Human Settlements Adjudication Commission resolves certain housing and land-use disputes."
},
{
    category: "Philippine Government",
    fact: "The National Commission on Indigenous Peoples protects and promotes the rights of indigenous cultural communities."
},
{
    category: "Philippine Government",
    fact: "The Philippine Commission on Women promotes gender equality and women’s empowerment."
},
{
    category: "Philippine Government",
    fact: "The National Youth Commission formulates policies and programs for Filipino youth."
},
{
    category: "Philippine Government",
    fact: "The Office of the Ombudsman is one of the constitutional bodies tasked with promoting accountability in public service."
},
{
    category: "Philippine Government",
    fact: "The Office of the Ombudsman investigates and prosecutes public officials accused of corruption and misconduct."
},
{
    category: "Philippine Government",
    fact: "The Senate President is the presiding officer of the Senate of the Philippines."
},
{
    category: "Philippine Government",
    fact: "The Philippine Amusement and Gaming Corporation regulates and operates certain gaming activities under Philippine law."
},

// =========================
// Political Figures
// 80 Philippine + 20 International
// =========================

{
    category: "Political Figures",
    fact: "Jose Rizal became one of the leading figures of the Philippine reform movement through his writings and political ideas."
},
{
    category: "Political Figures",
    fact: "Andres Bonifacio co-founded the Katipunan, the revolutionary society that fought for Philippine independence from Spain."
},
{
    category: "Political Figures",
    fact: "Emilio Aguinaldo became the first President of the First Philippine Republic."
},
{
    category: "Political Figures",
    fact: "Apolinario Mabini served as the first Prime Minister of the Philippines and was known as the 'Brains of the Revolution.'"
},
{
    category: "Political Figures",
    fact: "Marcelo H. del Pilar was a major leader of the Propaganda Movement and editor of La Solidaridad."
},
{
    category: "Political Figures",
    fact: "Graciano Lopez Jaena founded La Solidaridad, a newspaper used by Filipino reformists in Spain."
},
{
    category: "Political Figures",
    fact: "Emilio Jacinto was known as the 'Brains of the Katipunan' and wrote the Kartilya ng Katipunan."
},
{
    category: "Political Figures",
    fact: "Gregoria de Jesus helped safeguard important Katipunan documents during the Philippine Revolution."
},
{
    category: "Political Figures",
    fact: "Melchora Aquino supported Katipunan revolutionaries and became known as the 'Mother of the Philippine Revolution.'"
},
{
    category: "Political Figures",
    fact: "Felipe Agoncillo represented Filipino interests abroad during the period of the Treaty of Paris negotiations."
},
{
    category: "Political Figures",
    fact: "Pedro Paterno served as president of the Malolos Congress."
},
{
    category: "Political Figures",
    fact: "Isabelo de los Reyes became a labor leader, writer, and senator in the Philippines."
},
{
    category: "Political Figures",
    fact: "Antonio Luna served as a general of the Philippine Revolutionary Army during the Philippine-American War."
},
{
    category: "Political Figures",
    fact: "Gregorio del Pilar became one of the youngest generals of the Philippine Revolutionary Army."
},
{
    category: "Political Figures",
    fact: "Miguel Malvar continued resistance against American forces after the capture of Emilio Aguinaldo."
},
{
    category: "Political Figures",
    fact: "Macario Sakay led the Tagalog Republic during continued resistance against American rule."
},
{
    category: "Political Figures",
    fact: "Manuel L. Quezon became the first President of the Philippine Commonwealth."
},
{
    category: "Political Figures",
    fact: "Sergio Osmeña served as President of the Philippines after the death of Manuel L. Quezon."
},
{
    category: "Political Figures",
    fact: "Jose P. Laurel was a jurist and statesman who served as President during the Japanese occupation."
},
{
    category: "Political Figures",
    fact: "Manuel Roxas became the first President of the independent Third Republic of the Philippines."
},
{
    category: "Political Figures",
    fact: "Elpidio Quirino served as President during the postwar reconstruction period of the Philippines."
},
{
    category: "Political Figures",
    fact: "Ramon Magsaysay became known for promoting closer contact between the government and ordinary citizens."
},
{
    category: "Political Figures",
    fact: "Carlos P. Garcia promoted the Filipino First Policy during his presidency."
},
{
    category: "Political Figures",
    fact: "Diosdado Macapagal changed the official celebration of Philippine Independence Day from July 4 to June 12."
},
{
    category: "Political Figures",
    fact: "Ferdinand E. Marcos Sr. declared martial law in the Philippines in 1972."
},
{
    category: "Political Figures",
    fact: "Corazon C. Aquino became the first female President of the Philippines."
},
{
    category: "Political Figures",
    fact: "Fidel V. Ramos served as President of the Philippines from 1992 to 1998."
},
{
    category: "Political Figures",
    fact: "Gloria Macapagal Arroyo served as President of the Philippines from 2001 to 2010."
},
{
    category: "Political Figures",
    fact: "Benigno Aquino Jr. became one of the most recognized opposition figures during the martial law period."
},
{
    category: "Political Figures",
    fact: "Benigno Aquino III served as President of the Philippines from 2010 to 2016."
},
{
    category: "Political Figures",
    fact: "Rodrigo Duterte became the first Philippine President from Mindanao."
},
{
    category: "Political Figures",
    fact: "Ferdinand Marcos Jr. won the 2022 Philippine presidential election."
},
{
    category: "Political Figures",
    fact: "Miriam Defensor Santiago became the first Filipino elected as a judge of the International Criminal Court."
},
{
    category: "Political Figures",
    fact: "Carlos P. Romulo became the first Asian elected President of the United Nations General Assembly."
},
{
    category: "Political Figures",
    fact: "Claro M. Recto became known for his nationalist views and influence on Philippine political thought."
},
{
    category: "Political Figures",
    fact: "Lorenzo Tañada became known for his nationalist politics and opposition to foreign military bases."
},
{
    category: "Political Figures",
    fact: "Jose W. Diokno became a senator and human rights advocate."
},
{
    category: "Political Figures",
    fact: "Jovito Salonga served as Senate President and became known for his work in law and public service."
},
{
    category: "Political Figures",
    fact: "Raul Manglapus served as senator and later as Secretary of Foreign Affairs."
},
{
    category: "Political Figures",
    fact: "Cecilia Muñoz-Palma became the first woman appointed to the Supreme Court of the Philippines."
},
{
    category: "Political Figures",
    fact: "Cecilia Muñoz-Palma later served as president of the 1986 Constitutional Commission."
},
{
    category: "Political Figures",
    fact: "Jose Abad Santos served as Chief Justice of the Supreme Court and was executed during World War II."
},
{
    category: "Political Figures",
    fact: "Cayetano Arellano became the first Chief Justice of the Supreme Court of the Philippines."
},
{
    category: "Political Figures",
    fact: "Hilario Davide Jr. served as Chief Justice of the Supreme Court and later as Philippine ambassador to the United Nations."
},
{
    category: "Political Figures",
    fact: "Teofisto Guingona Jr. served as Vice President of the Philippines from 2001 to 2004."
},
{
    category: "Political Figures",
    fact: "Salvador Laurel served as Vice President of the Philippines under Corazon Aquino."
},
{
    category: "Political Figures",
    fact: "Arturo Tolentino served as Senate President and was a noted constitutionalist."
},
{
    category: "Political Figures",
    fact: "Gil J. Puyat served as Senate President of the Philippines."
},
{
    category: "Political Figures",
    fact: "Manuel Villar served as Speaker of the House of Representatives and Senate President."
},
{
    category: "Political Figures",
    fact: "Aquilino Pimentel Jr. authored the Local Government Code of 1991."
},
{
    category: "Political Figures",
    fact: "Aquilino Pimentel Jr. became known as the father of the Local Government Code."
},
{
    category: "Political Figures",
    fact: "Raul Roco served as senator and Secretary of Education."
},
{
    category: "Political Figures",
    fact: "Leticia Ramos-Shahani served as senator and diplomat."
},
{
    category: "Political Figures",
    fact: "Helena Benitez served as senator and was involved in education and civic work."
},
{
    category: "Political Figures",
    fact: "Geronima Pecson became the first woman elected to the Philippine Senate."
},
{
    category: "Political Figures",
    fact: "Eva Estrada Kalaw served as senator and became known for her opposition politics during the Marcos era."
},
{
    category: "Political Figures",
    fact: "Helena Zoila Benitez became one of the first women to serve in the Philippine Senate."
},
{
    category: "Political Figures",
    fact: "Santanina Rasul served as senator and advocated for Muslim Filipino representation."
},
{
    category: "Political Figures",
    fact: "Tecla San Andres Ziga served as senator and was active in public service and education."
},
{
    category: "Political Figures",
    fact: "Lito Atienza served as Mayor of Manila and later as a member of the House of Representatives."
},
{
    category: "Political Figures",
    fact: "Jejomar Binay served as Vice President of the Philippines from 2010 to 2016."
},
{
    category: "Political Figures",
    fact: "Leni Robredo served as Vice President of the Philippines from 2016 to 2022."
},
{
    category: "Political Figures",
    fact: "Maria Leonor Robredo founded Angat Buhay as a non-government organization after her vice presidency."
},
{
    category: "Political Figures",
    fact: "Francis Pangilinan served as senator and focused on agriculture and food security issues."
},
{
    category: "Political Figures",
    fact: "Risa Hontiveros became a senator known for work on health, women’s rights, and social legislation."
},
{
    category: "Political Figures",
    fact: "Leila de Lima served as Secretary of Justice and later as senator."
},
{
    category: "Political Figures",
    fact: "Franklin Drilon served as Senate President and was one of the longest-serving senators of the Fifth Republic."
},
{
    category: "Political Figures",
    fact: "Juan Ponce Enrile served as Senate President and held several high government positions."
},
{
    category: "Political Figures",
    fact: "Blas Ople served as Secretary of Labor, senator, and Secretary of Foreign Affairs."
},
{
    category: "Political Figures",
    fact: "Narciso Ramos served as Secretary of Foreign Affairs and helped represent the Philippines in ASEAN diplomacy."
},
{
    category: "Political Figures",
    fact: "Domingo Siazon Jr. served as Secretary of Foreign Affairs and Philippine ambassador."
},
{
    category: "Political Figures",
    fact: "Albert del Rosario served as Secretary of Foreign Affairs during the South China Sea arbitration case."
},
{
    category: "Political Figures",
    fact: "Perfecto Yasay Jr. served as Secretary of Foreign Affairs under President Rodrigo Duterte."
},
{
    category: "Political Figures",
    fact: "Teodoro Locsin Jr. served as Secretary of Foreign Affairs and Philippine Permanent Representative to the United Nations."
},
{
    category: "Political Figures",
    fact: "Conchita Carpio-Morales served as Ombudsman of the Philippines."
},
{
    category: "Political Figures",
    fact: "Maria Lourdes Sereno became the first woman appointed Chief Justice of the Philippines."
},
{
    category: "Political Figures",
    fact: "Artemio Panganiban served as Chief Justice of the Supreme Court of the Philippines."
},
{
    category: "Political Figures",
    fact: "Reynato Puno served as Chief Justice of the Supreme Court of the Philippines."
},
{
    category: "Political Figures",
    fact: "Diosdado Peralta served as Chief Justice of the Supreme Court of the Philippines."
},
{
    category: "Political Figures",
    fact: "Alexander Gesmundo became Chief Justice of the Supreme Court of the Philippines in 2021."
},

{
    category: "Political Figures",
    fact: "Aristotle is widely regarded as the Father of Political Science because of his systematic study of politics."
},
{
    category: "Political Figures",
    fact: "Plato wrote The Republic, one of the most influential works in political philosophy."
},
{
    category: "Political Figures",
    fact: "Socrates influenced Western political thought through his method of questioning and ethical inquiry."
},
{
    category: "Political Figures",
    fact: "Niccolò Machiavelli wrote The Prince, a major work in political theory."
},
{
    category: "Political Figures",
    fact: "Thomas Hobbes argued in Leviathan that government is needed to prevent disorder and insecurity."
},
{
    category: "Political Figures",
    fact: "John Locke argued that government should protect life, liberty, and property."
},
{
    category: "Political Figures",
    fact: "Jean-Jacques Rousseau developed the idea of the social contract and popular sovereignty."
},
{
    category: "Political Figures",
    fact: "Montesquieu developed the theory of separation of powers."
},
{
    category: "Political Figures",
    fact: "Voltaire became known for defending freedom of expression and religious tolerance."
},
{
    category: "Political Figures",
    fact: "Thomas Jefferson was the principal author of the United States Declaration of Independence."
},
{
    category: "Political Figures",
    fact: "James Madison is often called the Father of the United States Constitution."
},
{
    category: "Political Figures",
    fact: "Abraham Lincoln led the United States during the Civil War and issued the Emancipation Proclamation."
},
{
    category: "Political Figures",
    fact: "Winston Churchill served as Prime Minister of the United Kingdom during World War II."
},
{
    category: "Political Figures",
    fact: "Franklin D. Roosevelt led the United States through the Great Depression and much of World War II."
},
{
    category: "Political Figures",
    fact: "Mahatma Gandhi led India’s nonviolent movement for independence from British rule."
},
{
    category: "Political Figures",
    fact: "Nelson Mandela became South Africa’s first Black president after decades of anti-apartheid struggle."
},
{
    category: "Political Figures",
    fact: "Martin Luther King Jr. became a leading figure of the American civil rights movement."
},
{
    category: "Political Figures",
    fact: "Eleanor Roosevelt chaired the United Nations commission that drafted the Universal Declaration of Human Rights."
},
{
    category: "Political Figures",
    fact: "Lee Kuan Yew served as Singapore’s first Prime Minister."
},
{
    category: "Political Figures",
    fact: "Kofi Annan served as Secretary-General of the United Nations from 1997 to 2006."
},


// =========================
// Political Trivia
// =========================

{
    category: "Political Trivia",
    fact: "The term 'politics' comes from the Greek word 'polis,' meaning city-state."
},
{
    category: "Political Trivia",
    fact: "The oldest continuously operating parliament in the world is the Parliament of Iceland, established in 930 AD."
},
{
    category: "Political Trivia",
    fact: "The Philippines elects both its President and Vice President separately, making it possible for them to come from different political parties."
},
{
    category: "Political Trivia",
    fact: "Malacañang Palace has served as the official residence of Philippine presidents since 1863."
},
{
    category: "Political Trivia",
    fact: "The Senate of the Philippines meets in Pasay City, while the House of Representatives meets in Quezon City."
},
{
    category: "Political Trivia",
    fact: "The 1986 People Power Revolution lasted only four days but peacefully ended two decades of authoritarian rule."
},
{
    category: "Political Trivia",
    fact: "The Philippines was one of the original 51 founding members of the United Nations in 1945."
},
{
    category: "Political Trivia",
    fact: "ASEAN was founded on August 8, 1967, in Bangkok, Thailand."
},
{
    category: "Political Trivia",
    fact: "The International Court of Justice is located in The Hague, Netherlands."
},
{
    category: "Political Trivia",
    fact: "There are currently 193 member states in the United Nations."
},
{
    category: "Political Trivia",
    fact: "The Philippines celebrates Constitution Day every February 2."
},
{
    category: "Political Trivia",
    fact: "Congress Avenue in Quezon City leads directly to the Batasang Pambansa Complex."
},
{
    category: "Political Trivia",
    fact: "The Philippine government follows a presidential system of government."
},
{
    category: "Political Trivia",
    fact: "The first Philippine presidential election under the 1987 Constitution was held in 1992."
},
{
    category: "Political Trivia",
    fact: "The Commission on Elections (COMELEC) was established in 1940."
},
{
    category: "Political Trivia",
    fact: "The Philippines is the only country in the world whose national flag is officially flown upside down during a state of war."
},
{
    category: "Political Trivia",
    fact: "The Malolos Constitution of 1899 was the first republican constitution in Asia."
},
{
    category: "Political Trivia",
    fact: "The Philippine Senate was abolished in 1972 during Martial Law and restored in 1987."
},
{
    category: "Political Trivia",
    fact: "The Philippines has had five officially recognized Republics in its history."
},
{
    category: "Political Trivia",
    fact: "The EDSA People Power Revolution of 1986 became one of the world's most famous nonviolent revolutions."
},
{
    category: "Political Trivia",
    fact: "The Philippine Constitution is one of the few constitutions in the world that explicitly recognizes the vital role of youth in nation-building."
},
{
    category: "Political Trivia",
    fact: "The Philippines was the first Southeast Asian country to grant women the right to vote through a national plebiscite in 1937."
},
{
    category: "Political Trivia",
    fact: "The 1987 Constitution was approved by over 76% of Filipino voters in the constitutional plebiscite."
},
{
    category: "Political Trivia",
    fact: "The Philippine presidential seal has changed several times throughout the country's political history."
},
{
    category: "Political Trivia",
    fact: "The world's oldest continuously functioning parliament is Iceland's Althing, established in 930 AD."
},
{
    category: "Political Trivia",
    fact: "San Marino is considered the world's oldest existing republic, dating back to AD 301."
},
{
    category: "Political Trivia",
    fact: "Switzerland has no single president with full executive power; instead, it is governed by a seven-member Federal Council."
},
{
    category: "Political Trivia",
    fact: "The United Nations has six official languages: Arabic, Chinese, English, French, Russian, and Spanish."
},
{
    category: "Political Trivia",
    fact: "The Security Council is the only UN body that can adopt resolutions legally binding on member states."
},
{
    category: "Political Trivia",
    fact: "There are only two non-member observer states at the United Nations: the Holy See and Palestine."
},
{
    category: "Political Trivia",
    fact: "The European Union has 24 official languages."
},
{
    category: "Political Trivia",
    fact: "Bhutan measures national success using Gross National Happiness instead of relying only on Gross Domestic Product."
},
{
    category: "Political Trivia",
    fact: "Singapore has one of the world's highest voter turnout rates because voting is compulsory."
},
{
    category: "Political Trivia",
    fact: "Australia also requires eligible citizens to vote in federal elections."
},
{
    category: "Political Trivia",
    fact: "The Vatican City is the world's smallest independent state by both area and population."
},
{
    category: "Political Trivia",
    fact: "Russia spans 11 time zones, making it the country with the most time zones in the world."
},
{
    category: "Political Trivia",
    fact: "India is the world's largest democracy, with hundreds of millions of eligible voters."
},
{
    category: "Political Trivia",
    fact: "The United States has held presidential elections every four years since 1788 without interruption."
},
{
    category: "Political Trivia",
    fact: "New Zealand was the first self-governing country to grant women the right to vote in 1893."
},
{
    category: "Political Trivia",
    fact: "Brazil uses biometric fingerprint verification in many polling stations during elections."
},
{
    category: "Political Trivia",
    fact: "The Philippines is one of the world's largest users of automated vote-counting machines."
},
{
    category: "Political Trivia",
    fact: "ASEAN's official motto is 'One Vision, One Identity, One Community.'"
},
{
    category: "Political Trivia",
    fact: "The International Court of Justice is located inside the Peace Palace in The Hague, Netherlands."
},
{
    category: "Political Trivia",
    fact: "The Nobel Peace Prize is awarded in Oslo, Norway, while the other Nobel Prizes are awarded in Stockholm, Sweden."
},
{
    category: "Political Trivia",
    fact: "The Barasoain Church in Bulacan is known as the 'Cradle of Democracy in the East' because the First Philippine Congress met there in 1898."
},
{
    category: "Political Trivia",
    fact: "The Philippine peso is one of the few currencies in the world that regularly features former presidents and national heroes together."
},
{
    category: "Political Trivia",
    fact: "The ASEAN Secretariat is headquartered in Jakarta, Indonesia."
},
{
    category: "Political Trivia",
    fact: "The Philippines is one of only two predominantly Christian countries in Asia, the other being Timor-Leste."
},
{
    category: "Political Trivia",
    fact: "The official residence of the Vice President of the Philippines is not fixed by the Constitution and has changed several times."
},
{
    category: "Political Trivia",
    fact: "The House of Representatives approved the Articles of Impeachment against Vice President Sara Duterte on February 5, 2025."
},
{
    category: "Political Trivia",
    fact: "The Senate formally opened the impeachment trial of Vice President Sara Duterte on July 6, 2026."
},
{
    category: "Political Trivia",
    fact: "Vice President Sara Duterte became the first Vice President of the Philippines to stand trial before the Senate in an impeachment case."
},
{
    category: "Political Trivia",
    fact: "The impeachment trial of Vice President Sara Duterte was scheduled for 92 trial days under the Senate's pre-trial order."
},
{
    category: "Political Trivia",
    fact: "Only the Senate has the constitutional authority to try and decide impeachment cases in the Philippines."
},
{
    category: "Political Trivia",
    fact: "The Chief Justice presides over an impeachment trial only when the President of the Philippines is on trial; otherwise, the Senate President presides."
},
{
    category: "Political Trivia",
    fact: "A two-thirds vote of all 24 senators, or at least 16 votes, is required to convict an impeached official in the Philippines."
},
{
    category: "Political Trivia",
    fact: "Alan Peter Cayetano became the second-shortest-serving Senate President of the Philippines, serving for 28 days in 2026."
},
{
    category: "Political Trivia",
    fact: "Camilo Osías remains the undisputed shortest-serving Senate President of the Philippines, serving for only 13 days in 1952."
},
{
    category: "Political Trivia",
    fact: "The Senate Blue Ribbon Committee conducts investigations in aid of legislation but does not have the power to determine criminal guilt."
},
{
    category: "Political Trivia",
    fact: "The House of Representatives transmitted the impeachment complaint against Vice President Sara Duterte to the Senate on February 5, 2025."
},
{
    category: "Political Trivia",
    fact: "The 1935 Constitution was the first Constitution of the Philippine Commonwealth."
},
{
    category: "Political Trivia",
    fact: "The 1973 Constitution introduced a parliamentary form of government in the Philippines."
},
{
    category: "Political Trivia",
    fact: "The Philippines has held three national plebiscites to ratify three different Constitutions."
},
{
    category: "Political Trivia",
    fact: "The Batasang Pambansa served as the national legislature from 1978 to 1986."
},
{
    category: "Political Trivia",
    fact: "The Senate of the Philippines was first established in 1916 under the Jones Law."
},
{
    category: "Political Trivia",
    fact: "The House of Representatives traces its origins to the Philippine Assembly established in 1907."
},
{
    category: "Political Trivia",
    fact: "The Commission on Elections became a constitutional commission under the 1940 amendments to the 1935 Constitution."
},
{
    category: "Political Trivia",
    fact: "The Philippines has conducted synchronized national and local elections since 1992."
},
{
    category: "Political Trivia",
    fact: "The first fully automated national elections in the Philippines were held in 2010."
},
{
    category: "Political Trivia",
    fact: "The Autonomous Region in Muslim Mindanao was replaced by the Bangsamoro Autonomous Region in Muslim Mindanao in 2019."
},
{
    category: "Political Trivia",
    fact: "The Bangsamoro Organic Law was ratified through a plebiscite in 2019."
},
{
    category: "Political Trivia",
    fact: "The Philippine Senate is sometimes called the 'Upper House,' while the House of Representatives is known as the 'Lower House.'"
},
{
    category: "Political Trivia",
    fact: "Every bill filed in Congress is assigned a unique bill number before it enters the legislative process."
},
{
    category: "Political Trivia",
    fact: "The State of the Nation Address is constitutionally delivered by the President before a joint session of Congress every year."
},
{
    category: "Political Trivia",
    fact: "The Philippine Congress opens its regular session every fourth Monday of July unless a different date is provided by law."
},
{
    category: "Political Trivia",
    fact: "The Official Gazette publishes newly enacted Republic Acts, executive orders, and other official government issuances."
},
{
    category: "Political Trivia",
    fact: "The Philippine Constitution recognizes Filipino as the national language while both Filipino and English are official languages."
},
{
    category: "Political Trivia",
    fact: "The first local elections after the EDSA People Power Revolution were held in 1988."
},
{
    category: "Political Trivia",
    fact: "The Philippine Constitution created three independent constitutional commissions: the Commission on Elections, the Commission on Audit, and the Civil Service Commission."
},
{
    category: "Political Trivia",
    fact: "The Philippine National Anthem is the only national anthem in the world originally composed without lyrics."
},
{
    category: "Political Trivia",
    fact: "Former President Rodrigo Duterte remains the first former Philippine president to face proceedings before the International Criminal Court."
},
{
    category: "Political Trivia",
    fact: "Only the Senate has the constitutional power to try and decide impeachment cases in the Philippines."
},

// =========================
// Human Rights
// =========================

{
    category: "Human Rights",
    fact: "Human rights are universal, meaning they apply equally to all people regardless of nationality."
},
{
    category: "Human Rights",
    fact: "Freedom of expression is recognized as a fundamental human right."
},
{
    category: "Human Rights",
    fact: "The Universal Declaration of Human Rights was adopted by the United Nations on December 10, 1948."
},
{
    category: "Human Rights",
    fact: "The Philippines is a signatory to numerous international human rights treaties."
},
{
    category: "Human Rights",
    fact: "Article III of the 1987 Philippine Constitution contains the Bill of Rights."
},
{
    category: "Human Rights",
    fact: "Freedom of speech is protected under the Philippine Bill of Rights."
},
{
    category: "Human Rights",
    fact: "Freedom of religion is guaranteed by the 1987 Philippine Constitution."
},
{
    category: "Human Rights",
    fact: "No person shall be deprived of life, liberty, or property without due process of law."
},
{
    category: "Human Rights",
    fact: "The writ of habeas corpus protects individuals against unlawful detention."
},
{
    category: "Human Rights",
    fact: "Everyone charged with a crime is presumed innocent until proven guilty."
},
{
    category: "Human Rights",
    fact: "The Constitution prohibits cruel, degrading, or inhuman punishment."
},
{
    category: "Human Rights",
    fact: "Every accused person has the right to remain silent and to have competent legal counsel."
},
{
    category: "Human Rights",
    fact: "The Commission on Human Rights may investigate human rights violations involving civil and political rights."
},
{
    category: "Human Rights",
    fact: "Human rights apply equally to all people regardless of nationality, race, religion, or gender."
},
{
    category: "Human Rights",
    fact: "The right to peaceful assembly is protected by the Philippine Constitution."
},
{
    category: "Human Rights",
    fact: "The right to information on matters of public concern is guaranteed by the Constitution."
},
{
    category: "Human Rights",
    fact: "Children have special rights protected under both Philippine law and international agreements."
},
{
    category: "Human Rights",
    fact: "The Universal Declaration of Human Rights contains 30 articles."
},
{
    category: "Human Rights",
    fact: "The Universal Declaration of Human Rights was proclaimed by the United Nations General Assembly in Paris."
},
{
    category: "Human Rights",
    fact: "Human rights are considered inalienable, meaning they cannot simply be taken away."
},
{
    category: "Human Rights",
    fact: "Human rights are indivisible, meaning civil, political, economic, social, and cultural rights are all important."
},
{
    category: "Human Rights",
    fact: "The Philippines is a State Party to the International Covenant on Civil and Political Rights."
},
{
    category: "Human Rights",
    fact: "The Philippines is a State Party to the International Covenant on Economic, Social and Cultural Rights."
},
{
    category: "Human Rights",
    fact: "The Convention on the Rights of the Child recognizes everyone below 18 years old as a child unless national law provides otherwise."
},
{
    category: "Human Rights",
    fact: "The Philippines ratified the Convention on the Rights of the Child in 1990."
},
{
    category: "Human Rights",
    fact: "The Convention on the Elimination of All Forms of Discrimination Against Women is commonly known as CEDAW."
},
{
    category: "Human Rights",
    fact: "The Philippines ratified CEDAW in 1981."
},
{
    category: "Human Rights",
    fact: "The Magna Carta of Women is Republic Act No. 9710."
},
{
    category: "Human Rights",
    fact: "The Magna Carta of Women seeks to eliminate discrimination against women in the Philippines."
},
{
    category: "Human Rights",
    fact: "The Anti-Violence Against Women and Their Children Act is Republic Act No. 9262."
},
{
    category: "Human Rights",
    fact: "The Safe Spaces Act of 2019 protects individuals from gender-based sexual harassment."
},
{
    category: "Human Rights",
    fact: "The Safe Spaces Act is also known as Republic Act No. 11313."
},
{
    category: "Human Rights",
    fact: "The Indigenous Peoples' Rights Act of 1997 is Republic Act No. 8371."
},
{
    category: "Human Rights",
    fact: "The Indigenous Peoples' Rights Act recognizes the rights of Indigenous Cultural Communities and Indigenous Peoples."
},
{
    category: "Human Rights",
    fact: "The Philippines recognizes ancestral domain rights of Indigenous Peoples."
},
{
    category: "Human Rights",
    fact: "Republic Act No. 7277 is known as the Magna Carta for Persons with Disability."
},
{
    category: "Human Rights",
    fact: "Persons with disabilities are entitled to equal opportunities under Philippine law."
},
{
    category: "Human Rights",
    fact: "The Expanded Senior Citizens Act grants benefits and privileges to senior citizens."
},
{
    category: "Human Rights",
    fact: "The Data Privacy Act protects personal information in the Philippines."
},
{
    category: "Human Rights",
    fact: "The Data Privacy Act is Republic Act No. 10173."
},
{
    category: "Human Rights",
    fact: "The National Privacy Commission implements the Data Privacy Act."
},
{
    category: "Human Rights",
    fact: "The right to privacy is protected in the Philippines through constitutional protections and the Data Privacy Act."
},
{
    category: "Human Rights",
    fact: "Children have the right to education, health, and protection from abuse."
},
{
    category: "Human Rights",
    fact: "Child labor is regulated and restricted under Philippine law."
},
{
    category: "Human Rights",
    fact: "Human trafficking is prohibited under Philippine law."
},
{
    category: "Human Rights",
    fact: "The Anti-Trafficking in Persons Act is Republic Act No. 9208."
},
{
    category: "Human Rights",
    fact: "Forced labor is prohibited under international human rights standards."
},
{
    category: "Human Rights",
    fact: "Slavery is prohibited under international law."
},
{
    category: "Human Rights",
    fact: "Every person has the right to a nationality under the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to seek asylum from persecution under the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to marry with free and full consent under the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to own property under the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to education under the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "Elementary education should be free and compulsory according to the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to participate in cultural life."
},
{
    category: "Human Rights",
    fact: "Workers have the right to just and favorable conditions of work."
},
{
    category: "Human Rights",
    fact: "Workers have the right to equal pay for equal work."
},
{
    category: "Human Rights",
    fact: "Workers have the right to form and join trade unions."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to rest and leisure under the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to an adequate standard of living."
},
{
    category: "Human Rights",
    fact: "Access to food is recognized as part of the right to an adequate standard of living."
},
{
    category: "Human Rights",
    fact: "Access to housing is recognized as part of the right to an adequate standard of living."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to social security."
},
{
    category: "Human Rights",
    fact: "Freedom of movement is recognized as a human right."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to leave any country, including their own."
},
{
    category: "Human Rights",
    fact: "No one shall be subjected to arbitrary exile."
},
{
    category: "Human Rights",
    fact: "No one shall be subjected to arbitrary arrest."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to a fair and public hearing."
},
{
    category: "Human Rights",
    fact: "Every person has the right to recognition everywhere as a person before the law."
},
{
    category: "Human Rights",
    fact: "Everyone is entitled to equal protection of the law."
},
{
    category: "Human Rights",
    fact: "Discrimination based on race, sex, language, or religion is prohibited under the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "The right to vote is recognized as a political right."
},
{
    category: "Human Rights",
    fact: "Public service should be accessible to all citizens on equal terms."
},
{
    category: "Human Rights",
    fact: "The will of the people is the basis of the authority of government according to the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "Secret voting helps protect the freedom of voters."
},
{
    category: "Human Rights",
    fact: "Human rights apply during both peace and armed conflict, although different legal rules may apply."
},
{
    category: "Human Rights",
    fact: "International Humanitarian Law and Human Rights Law are related but distinct fields of law."
},
{
    category: "Human Rights",
    fact: "The Geneva Conventions protect victims of armed conflict."
},
{
    category: "Human Rights",
    fact: "The International Committee of the Red Cross promotes compliance with the Geneva Conventions."
},
{
    category: "Human Rights",
    fact: "The Philippines observes Human Rights Consciousness Week every December."
},
{
    category: "Human Rights",
    fact: "December 10 is celebrated worldwide as Human Rights Day."
},
{
    category: "Human Rights",
    fact: "Human Rights Day commemorates the adoption of the Universal Declaration of Human Rights."
},
{
    category: "Human Rights",
    fact: "The Commission on Human Rights is an independent constitutional office."
},
{
    category: "Human Rights",
    fact: "The Commission on Human Rights has investigative powers but does not prosecute criminal cases."
},
{
    category: "Human Rights",
    fact: "The Commission on Human Rights promotes human rights education throughout the Philippines."
},
{
    category: "Human Rights",
    fact: "Human rights education is encouraged by both Philippine law and international agreements."
},
{
    category: "Human Rights",
    fact: "Freedom from discrimination is one of the core principles of international human rights law."
},
{
    category: "Human Rights",
    fact: "Human dignity is considered the foundation of all human rights."
},
{
    category: "Human Rights",
    fact: "Equality before the law is recognized as a basic human right."
},
{
    category: "Human Rights",
    fact: "No one shall be held guilty of a crime for an act that was not criminal when it was committed."
},
{
    category: "Human Rights",
    fact: "Everyone has the right to an effective remedy when their fundamental rights are violated."
},
{
    category: "Human Rights",
    fact: "The Philippines has laws protecting children from online sexual exploitation."
},
{
    category: "Human Rights",
    fact: "Republic Act No. 7610 provides special protection for children against abuse, exploitation, and discrimination."
},
{
    category: "Human Rights",
    fact: "Republic Act No. 9344 established the Juvenile Justice and Welfare System in the Philippines."
},
{
    category: "Human Rights",
    fact: "Children in conflict with the law are entitled to rights and protections under Republic Act No. 9344."
},
{
    category: "Human Rights",
    fact: "Republic Act No. 9994 expanded the benefits and privileges of senior citizens."
},
{
    category: "Human Rights",
    fact: "Philippine laws recognize accessibility as an important right for persons with disabilities."
},
{
    category: "Human Rights",
    fact: "The 1987 Constitution created the Commission on Human Rights as an independent office."
},

// =========================
// Law
// =========================

{
    category: "Law",
    fact: "Constitutional law focuses on interpreting and applying the Constitution."
},
{
    category: "Law",
    fact: "A court decision becomes final and executory when no further appeal or remedy is available within the required period."
},
{
    category: "Law",
    fact: "The Constitution is the supreme law of the Philippines."
},
{
    category: "Law",
    fact: "The Supreme Court is the highest judicial body in the Philippines."
},
{
    category: "Law",
    fact: "The rule of law means that everyone, including government officials, is subject to the law."
},
{
    category: "Law",
    fact: "Judicial review allows the Supreme Court to determine whether laws or government actions are constitutional."
},
{
    category: "Law",
    fact: "A cause of action is the legal reason a person may file a case in court."
},
{
    category: "Law",
    fact: "The Civil Code governs private legal relationships in the Philippines."
},
{
    category: "Law",
    fact: "The Revised Penal Code defines crimes and their corresponding penalties."
},
{
    category: "Law",
    fact: "The Rules of Court govern court procedures in the Philippines."
},
{
    category: "Law",
    fact: "Ignorance of the law excuses no one from compliance with its provisions."
},
{
    category: "Law",
    fact: "Acquittal means the accused is found not guilty of the offense charged."
},
{
    category: "Law",
    fact: "The judiciary is independent from the executive and legislative branches."
},
{
    category: "Law",
    fact: "Laws passed by Congress require the President's signature to become law, unless validly passed over a veto."
},
{
    category: "Law",
    fact: "Republic Acts are laws enacted by the Congress of the Philippines."
},
{
    category: "Law",
    fact: "Executive Orders are directives issued by the President to implement existing laws."
},
{
    category: "Law",
    fact: "The Philippine legal system is primarily based on civil law, with influences from common law."
},
{
    category: "Law",
    fact: "The Philippine legal system recognizes both civil and criminal cases."
},
{
    category: "Law",
    fact: "A bill becomes a law after it is passed by both houses of Congress and signed by the President, or when it lapses into law without the President's signature."
},
{
    category: "Law",
    fact: "A presidential veto may be overridden by a two-thirds vote of all the Members of each House of Congress."
},
{
    category: "Law",
    fact: "The Court of Appeals reviews decisions of Regional Trial Courts and certain quasi-judicial agencies."
},
{
    category: "Law",
    fact: "The Court of Tax Appeals has jurisdiction over tax-related disputes."
},
{
    category: "Law",
    fact: "Regional Trial Courts are considered courts of general jurisdiction in the Philippines."
},
{
    category: "Law",
    fact: "Metropolitan Trial Courts handle many less serious criminal offenses and smaller civil cases within Metro Manila."
},
{
    category: "Law",
    fact: "Municipal Trial Courts hear cases assigned to them by law outside Metropolitan Manila."
},
{
    category: "Law",
    fact: "The Sandiganbayan is a special court that hears graft and corruption cases involving certain public officials."
},
{
    category: "Law",
    fact: "The Integrated Bar of the Philippines is the official organization of all Philippine lawyers."
},
{
    category: "Law",
    fact: "Passing the Philippine Bar Examination is one of the requirements to become a lawyer."
},
{
    category: "Law",
    fact: "The Supreme Court administers the Philippine Bar Examinations."
},
{
    category: "Law",
    fact: "Judges must remain impartial in deciding cases."
},
{
    category: "Law",
    fact: "A prosecutor represents the People of the Philippines in criminal cases."
},
{
    category: "Law",
    fact: "The Public Attorney's Office provides free legal representation to qualified indigent clients."
},
{
    category: "Law",
    fact: "The Office of the Solicitor General serves as the principal law office of the Philippine government."
},
{
    category: "Law",
    fact: "Double jeopardy protects a person from being tried twice for the same offense after acquittal or conviction, subject to constitutional requirements."
},
{
    category: "Law",
    fact: "An ex post facto law is prohibited because it punishes an act that was not criminal when it was committed."
},
{
    category: "Law",
    fact: "A bill of attainder is prohibited under the Philippine Constitution."
},
{
    category: "Law",
    fact: "A writ of certiorari may be filed to question acts done with grave abuse of discretion."
},
{
    category: "Law",
    fact: "A writ of mandamus compels a government official or agency to perform a duty required by law."
},
{
    category: "Law",
    fact: "A writ of prohibition directs a tribunal or officer to stop acting without or in excess of jurisdiction."
},
{
    category: "Law",
    fact: "A writ of quo warranto questions a person's legal right to hold a public office."
},
{
    category: "Law",
    fact: "The Writ of Amparo protects the rights to life, liberty, and security."
},
{
    category: "Law",
    fact: "The Writ of Habeas Data protects a person's right to privacy involving personal information."
},
{
    category: "Law",
    fact: "The Writ of Kalikasan is available for environmental damage affecting inhabitants of two or more cities or provinces."
},
{
    category: "Law",
    fact: "Administrative law governs the actions and decisions of government agencies."
},
{
    category: "Law",
    fact: "Criminal law defines acts that are considered offenses against the State."
},
{
    category: "Law",
    fact: "Civil law governs disputes involving private rights and obligations."
},
{
    category: "Law",
    fact: "Labor law regulates the relationship between employers and employees."
},
{
    category: "Law",
    fact: "Election law governs the conduct of elections, political parties, and voting."
},
{
    category: "Law",
    fact: "Tax law governs the assessment and collection of taxes."
},
{
    category: "Law",
    fact: "Commercial law governs business transactions and commercial activities."
},
{
    category: "Law",
    fact: "Environmental law protects natural resources and regulates activities affecting the environment."
},
{
    category: "Law",
    fact: "International law regulates relations between sovereign states and international organizations."
},
{
    category: "Law",
    fact: "Jurisprudence refers to legal principles established by decisions of the Supreme Court."
},
{
    category: "Law",
    fact: "Philippine courts follow the doctrine of stare decisis, giving weight to applicable Supreme Court precedents."
},
{
    category: "Law",
    fact: "The burden of proving guilt in a criminal case rests upon the prosecution."
},
{
    category: "Law",
    fact: "Proof beyond reasonable doubt is the standard required for conviction in criminal cases."
},
{
    category: "Law",
    fact: "Civil cases generally require proof by preponderance of evidence rather than proof beyond reasonable doubt."
},
{
    category: "Law",
    fact: "A subpoena requires a person to appear before a court or legal authority."
},
{
    category: "Law",
    fact: "A subpoena duces tecum requires a person to produce documents or evidence."
},
{
    category: "Law",
    fact: "An affidavit is a written statement sworn before an authorized officer."
},
{
    category: "Law",
    fact: "A complaint may start a civil case or a criminal proceeding depending on the rules involved."
},
{
    category: "Law",
    fact: "An information is a formal criminal charge filed in court by a prosecutor."
},
{
    category: "Law",
    fact: "Arraignment is the stage where an accused is informed of the charge and enters a plea."
},
{
    category: "Law",
    fact: "Bail allows temporary liberty while a criminal case is pending, subject to legal conditions."
},
{
    category: "Law",
    fact: "A warrant of arrest is issued by a judge after finding probable cause."
},
{
    category: "Law",
    fact: "A search warrant must particularly describe the place to be searched and the items to be seized."
},
{
    category: "Law",
    fact: "Probable cause is required before a judge may issue a warrant of arrest or search warrant."
},
{
    category: "Law",
    fact: "Jurisdiction refers to a court’s legal authority to hear and decide a case."
},
{
    category: "Law",
    fact: "Venue refers to the proper place where a case should be filed or heard."
},
{
    category: "Law",
    fact: "Appeal is the process of asking a higher court to review a lower court’s decision."
},
{
    category: "Law",
    fact: "A final judgment is one that fully resolves the case or issue before the court."
},
{
    category: "Law",
    fact: "Contempt of court may be punished when a person disobeys or disrespects lawful court authority."
},
{
    category: "Law",
    fact: "Legal ethics governs the professional conduct of lawyers."
},
{
    category: "Law",
    fact: "Notaries public authenticate certain legal documents and administer oaths."
},
{
    category: "Law",
    fact: "A contract is a meeting of minds between parties that creates obligations."
},
{
    category: "Law",
    fact: "Obligations may arise from law, contracts, quasi-contracts, crimes, and quasi-delicts."
},
{
    category: "Law",
    fact: "Torts are generally known in Philippine civil law as quasi-delicts."
},
{
    category: "Law",
    fact: "Family law governs marriage, family relations, legitimacy, support, and related matters."
},
{
    category: "Law",
    fact: "Property law governs ownership, possession, and rights over property."
},
{
    category: "Law",
    fact: "Succession law governs the transfer of rights and property after death."
},
{
    category: "Law",
    fact: "Special proceedings include court actions such as settlement of estate, guardianship, and adoption."
},
{
    category: "Law",
    fact: "Alternative dispute resolution includes mediation, conciliation, and arbitration."
},
{
    category: "Law",
    fact: "Mediation uses a neutral third person to help parties reach a voluntary settlement."
},
{
    category: "Law",
    fact: "Arbitration allows parties to submit a dispute to an arbitrator for resolution."
},
{
    category: "Law",
    fact: "Barangay conciliation is required for certain disputes before they may be filed in court."
},
{
    category: "Law",
    fact: "The Katarungang Pambarangay system helps settle disputes at the barangay level."
},
{
    category: "Law",
    fact: "Small claims cases are designed to resolve simple money claims without the need for lawyers."
},
{
    category: "Law",
    fact: "A preliminary investigation determines whether there is probable cause to charge a person in court."
},
{
    category: "Law",
    fact: "Plea bargaining allows an accused to plead guilty to a lesser offense under legal conditions."
},
{
    category: "Law",
    fact: "Hearsay evidence is generally inadmissible unless it falls under recognized exceptions."
},
{
    category: "Law",
    fact: "Documentary evidence consists of writings, recordings, photographs, or other materials offered as proof."
},
{
    category: "Law",
    fact: "Testimonial evidence comes from the statements of witnesses in court."
},
{
    category: "Law",
    fact: "Real evidence consists of physical objects presented in court."
},
{
    category: "Law",
    fact: "The chain of custody rule helps preserve the integrity of seized evidence."
},
{
    category: "Law",
    fact: "Legal standing refers to a party’s sufficient interest in a case to bring it before a court."
},
{
    category: "Law",
    fact: "Mootness means a case no longer presents an actual controversy for the court to resolve."
},
{
    category: "Law",
    fact: "Res judicata prevents the same parties from relitigating a case that has already been finally decided."
},
{
    category: "Law",
    fact: "Laches refers to unreasonable delay in asserting a legal right."
},
{
    category: "Law",
    fact: "Prescription refers to the period set by law for enforcing rights or filing actions."
},
{
    category: "Law",
    fact: "Legal aid helps people who cannot afford private legal services access justice."
},

// =========================
// Celebrities in Politics
// =========================

{
    category: "Celebrities in Politics",
    fact: "Vice Ganda studied Political Science at Far Eastern University before becoming one of the most successful entertainers in Philippine show business."
},
{
    category: "Celebrities in Politics",
    fact: "Jhong Hilario, a television host, actor, dancer, and public servant, graduated with a Bachelor of Arts in Political Science."
},
{
    category: "Celebrities in Politics",
    fact: "Isko Moreno began his career as an actor before becoming the Mayor of Manila from 2019 to 2022."
},
{
    category: "Celebrities in Politics",
    fact: "Alfred Vargas served as a member of the House of Representatives representing Quezon City's 5th District."
},
{
    category: "Celebrities in Politics",
    fact: "Lucy Torres-Gomez has served as the representative of Leyte's 4th District."
},
{
    category: "Celebrities in Politics",
    fact: "Richard Gomez served as the mayor of Ormoc City beginning in 2016."
},
{
    category: "Celebrities in Politics",
    fact: "Lani Mercado served as the representative of Cavite's 2nd District."
},
{
    category: "Celebrities in Politics",
    fact: "Tito Sotto was a television host before serving as Senate President of the Philippines."
},
{
    category: "Celebrities in Politics",
    fact: "Bong Revilla began his career as a film actor before serving as a Philippine senator."
},
{
    category: "Celebrities in Politics",
    fact: "Robin Padilla became the top vote-getter in the 2022 Philippine senatorial election."
},
{
    category: "Celebrities in Politics",
    fact: "Former actor Herbert Bautista served as Mayor of Quezon City from 2010 to 2019."
},
{
    category: "Celebrities in Politics",
    fact: "Vilma Santos was the first Filipina actress to be elected governor of Batangas."
},
{
    category: "Celebrities in Politics",
    fact: "Joseph Estrada served as the 13th President of the Philippines from 1998 to 2001 after a successful acting career."
},
{
    category: "Celebrities in Politics",
    fact: "Joseph Estrada previously served as Vice President of the Philippines from 1992 to 1998."
},
{
    category: "Celebrities in Politics",
    fact: "Joseph Estrada later became Mayor of Manila from 2013 to 2019."
},
{
    category: "Celebrities in Politics",
    fact: "Lito Lapid served as Governor of Pampanga before becoming a Philippine senator."
},
{
    category: "Celebrities in Politics",
    fact: "Lito Lapid first entered the Senate in 2004."
},
{
    category: "Celebrities in Politics",
    fact: "Nora Aunor was proclaimed National Artist for Film and Broadcast Arts in 2022."
},
{
    category: "Celebrities in Politics",
    fact: "Orlando 'Orly' Mercado transitioned from broadcasting to public service and later served as Secretary of National Defense."
},
{
    category: "Celebrities in Politics",
    fact: "Jhong Hilario serves as a councilor of Makati City while continuing his television career."
},
{
    category: "Celebrities in Politics",
    fact: "Arjo Atayde became the representative of the First District of Quezon City after winning the 2022 elections."
},
{
    category: "Celebrities in Politics",
    fact: "Arjo Atayde became the first actor elected as representative of Quezon City's First District."
},
{
    category: "Celebrities in Politics",
    fact: "Aiko Melendez has served as a councilor of Quezon City."
},
{
    category: "Celebrities in Politics",
    fact: "Daniel Fernando served as Vice Governor before becoming Governor of Bulacan."
},
{
    category: "Celebrities in Politics",
    fact: "Daniel Fernando was known as an actor before entering public service."
},
{
    category: "Celebrities in Politics",
    fact: "Jolo Revilla has served as Vice Governor of Cavite."
},
{
    category: "Celebrities in Politics",
    fact: "Luis 'Chavit' Singson gained national prominence as both a politician and media personality."
},
{
    category: "Celebrities in Politics",
    fact: "Actor Yul Servo became Vice Mayor of Manila after serving multiple terms in the House of Representatives."
},
{
    category: "Celebrities in Politics",
    fact: "Yul Servo represented Manila's Third District in the House of Representatives."
},
{
    category: "Celebrities in Politics",
    fact: "Ramon 'Bong' Revilla Jr. first served as Mayor of Bacoor before becoming a senator."
},
{
    category: "Celebrities in Politics",
    fact: "Manny Pacquiao served as a senator of the Philippines from 2016 to 2022 after becoming one of the most famous boxers in the world."
},
{
    category: "Celebrities in Politics",
    fact: "Manny Pacquiao represented Sarangani in the House of Representatives before becoming a senator."
},
{
    category: "Celebrities in Politics",
    fact: "Freddie Webb was a basketball player and television personality before serving as a Philippine senator."
},
{
    category: "Celebrities in Politics",
    fact: "Robert Jaworski, a Philippine basketball icon, served as a senator from 1998 to 2004."
},
{
    category: "Celebrities in Politics",
    fact: "Monsour del Rosario was a taekwondo champion and actor before serving as a Makati congressman."
},
{
    category: "Celebrities in Politics",
    fact: "Alma Moreno, known as an actress and dancer, served as a councilor in Parañaque."
},
{
    category: "Celebrities in Politics",
    fact: "Jinggoy Estrada worked as an actor before serving as mayor of San Juan and later as a Philippine senator."
},
{
    category: "Celebrities in Politics",
    fact: "Ramon Revilla Sr. was a film actor before becoming a senator of the Philippines."
},
{
    category: "Celebrities in Politics",
    fact: "Cesar Montano, a well-known actor and filmmaker, served as chief operating officer of the Tourism Promotions Board."
},
{
    category: "Celebrities in Politics",
    fact: "Dennis Padilla, a comedian and actor, entered politics as a councilor in Caloocan City."
},
{
    category: "Celebrities in Politics",
    fact: "Shalani Soledad became widely known as a television personality and also served as a councilor of Valenzuela City."
},
{
    category: "Celebrities in Politics",
    fact: "Bobby Pacquiao, a professional boxer and brother of Manny Pacquiao, served as a member of the House of Representatives."
},
{
    category: "Celebrities in Politics",
    fact: "Daisy Reyes, a former beauty queen and actress, served as a councilor in Pateros."
},
{
    category: "Celebrities in Politics",
    fact: "Roderick Paulate, an actor and television host, served as a councilor of Quezon City."
},
{
    category: "Celebrities in Politics",
    fact: "Anjo Yllana, an actor and comedian, served as a councilor in Parañaque."
},
{
    category: "Celebrities in Politics",
    fact: "Jestoni Alarcon, an actor, entered politics and served in local government in Rizal."
},
{
    category: "Celebrities in Politics",
    fact: "Edu Manzano, an actor and television host, served as Vice Mayor of Makati."
},
{
    category: "Celebrities in Politics",
    fact: "Joey Marquez, an actor and comedian, served as Mayor of Parañaque."
},
{
    category: "Celebrities in Politics",
    fact: "Vandolph Quizon, an actor and son of Dolphy, served as a councilor in Parañaque."
},
{
    category: "Celebrities in Politics",
    fact: "Yoyong Martires, a former basketball player and actor, served as Vice Mayor of Pasig."
}

];

let currentFactIndex = 0;
let currentCategory = "All";
let searchTerm = "";

const triviaCategory = document.getElementById("triviaCategory");
const triviaFact = document.getElementById("triviaFact");
const nextFactBtn = document.getElementById("nextFactBtn");
const saveFactBtn = document.getElementById("saveFactBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const categoryButtons = document.querySelectorAll(".category");
const triviaCard = document.querySelector(".trivia-card");
const startTriviaBtn = document.getElementById("startTriviaBtn");

function getFilteredFacts() {
    return triviaFacts.filter(item => {
        const matchesCategory =
            currentCategory === "All" ||
            item.category === currentCategory;

        const matchesSearch =
            item.fact.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });
}

function resetSaveButton() {
    saveFactBtn.textContent = "⭐ Save Fact";
    saveFactBtn.classList.remove("saved");
    saveFactBtn.disabled = false;
}

function markSavedButton() {
    saveFactBtn.textContent = "✅ Saved";
    saveFactBtn.classList.add("saved");
    saveFactBtn.disabled = true;
}

function scrollToFact() {
    triviaCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function showFactFromList(list, shouldScroll = false) {
    if (list.length === 0) {
        triviaCategory.textContent = "No Match";
        triviaFact.textContent = "No trivia fact found. Try another search or category.";
        currentFactIndex = -1;
        resetSaveButton();

        if (shouldScroll) scrollToFact();
        return;
    }

    const randomIndex = Math.floor(Math.random() * list.length);
    const selectedFact = list[randomIndex];

    currentFactIndex = triviaFacts.indexOf(selectedFact);

    triviaCategory.textContent = selectedFact.category;
    triviaFact.textContent = selectedFact.fact;

    resetSaveButton();

    if (shouldScroll) scrollToFact();
}

function nextFact(shouldScroll = false) {
    const filteredFacts = getFilteredFacts();
    showFactFromList(filteredFacts, shouldScroll);
}

function saveFact() {
    if (currentFactIndex === -1) {
        alert("No fact to save.");
        return;
    }

    const currentFact = triviaFacts[currentFactIndex];
    let savedFacts = JSON.parse(localStorage.getItem("savedFacts")) || [];

    const alreadySaved = savedFacts.some(item =>
        item.fact === currentFact.fact &&
        item.category === currentFact.category
    );

    if (alreadySaved) {
        markSavedButton();
        return;
    }

    savedFacts.push(currentFact);
    localStorage.setItem("savedFacts", JSON.stringify(savedFacts));

    markSavedButton();
}

nextFactBtn.addEventListener("click", () => {
    nextFact(true);
});

saveFactBtn.addEventListener("click", saveFact);

searchBtn.addEventListener("click", () => {
    searchTerm = searchInput.value.trim();
    nextFact(true);
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchTerm = searchInput.value.trim();
        nextFact(true);
    }
});

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentCategory = button.textContent.trim();
        nextFact(true);
    });
});

startTriviaBtn.addEventListener("click", () => {

    nextFact();

    document.querySelector(".trivia-card").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

triviaCategory.textContent = "Political Science";