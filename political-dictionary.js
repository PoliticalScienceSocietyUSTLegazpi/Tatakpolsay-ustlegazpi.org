const politicalDictionary = [
    {
    term: "Democracy",
    category: "Political Theory & Ideologies",
    definition: "A form of government where power belongs to the people.",
    simple: "People choose their leaders through elections.",
    example: "The Philippines is a democratic republic.",
    related: "Election, Representation, Sovereignty"
},
{
    term: "Sovereignty",
    category: "Political Science",
    definition: "The supreme authority of a state to govern itself.",
    simple: "A country has the right to rule itself without outside control.",
    example: "The Philippines has sovereignty over its territory.",
    related: "State, Territory, Independence"
},
{
    term: "State",
    category: "Political Science",
    definition: "A political community with population, territory, government, and sovereignty.",
    simple: "A state is a country-like political unit.",
    example: "The Philippines is a state.",
    related: "Government, Sovereignty, Territory"
},
{
    term: "Government",
    category: "Political Science",
    definition: "The institution that makes, implements, and enforces laws.",
    simple: "It manages the affairs of the state.",
    example: "The government creates policies for citizens.",
    related: "State, Law, Governance"
},
{
    term: "Constitution",
    category: "Constitutional Law",
    definition: "The fundamental law that establishes government powers, limits, and citizens’ rights.",
    simple: "It is the highest law of the country.",
    example: "The 1987 Constitution is the current Constitution of the Philippines.",
    related: "Bill of Rights, Rule of Law, Separation of Powers"
},
{
    term: "Rule of Law",
    category: "Law & Jurisprudence",
    definition: "The principle that everyone, including public officials, is subject to the law.",
    simple: "No one is above the law.",
    example: "A mayor must follow the law like an ordinary citizen.",
    related: "Justice, Due Process, Constitution"
},
{
    term: "Separation of Powers",
    category: "Constitutional Law",
    definition: "The division of government power among the executive, legislative, and judicial branches.",
    simple: "Each branch has its own job.",
    example: "Congress makes laws, the President enforces laws, and courts interpret laws.",
    related: "Checks and Balances, Executive, Legislature"
},
{
    term: "Checks and Balances",
    category: "Constitutional Law",
    definition: "A system where each branch of government can limit the power of the others.",
    simple: "Branches watch each other to prevent abuse.",
    example: "The Supreme Court may declare a law unconstitutional.",
    related: "Separation of Powers, Judiciary, Constitution"
},
{
    term: "Executive",
    category: "Philippine Government",
    definition: "The branch of government responsible for implementing and enforcing laws.",
    simple: "This branch carries out the law.",
    example: "The President belongs to the executive branch.",
    related: "President, Cabinet, Administration"
},
{
    term: "Legislature",
    category: "Philippine Government",
    definition: "The branch of government that creates, amends, and repeals laws.",
    simple: "This branch makes laws.",
    example: "The Senate and House of Representatives form Congress.",
    related: "Congress, Lawmaking, Representation"
},
{
    term: "Judiciary",
    category: "Philippine Government",
    definition: "The branch of government that interprets laws and settles legal disputes.",
    simple: "This branch decides cases.",
    example: "The Supreme Court is part of the judiciary.",
    related: "Courts, Justice, Judicial Review"
},
{
    term: "Judicial Review",
    category: "Constitutional Law",
    definition: "The power of courts to determine whether a law or government action violates the Constitution.",
    simple: "Courts can check if something is unconstitutional.",
    example: "The Supreme Court can strike down unconstitutional laws.",
    related: "Judiciary, Constitution, Checks and Balances"
},
{
    term: "Due Process",
    category: "Law & Jurisprudence",
    definition: "The legal requirement that the government must respect fair procedures before depriving a person of life, liberty, or property.",
    simple: "People must be treated fairly by law.",
    example: "A person must be given a chance to be heard.",
    related: "Rights, Justice, Rule of Law"
},
{
    term: "Equal Protection",
    category: "Constitutional Law",
    definition: "The principle that people in similar situations must be treated equally under the law.",
    simple: "The law should not unfairly favor or discriminate.",
    example: "Citizens must receive equal legal protection.",
    related: "Rights, Equality, Constitution"
},
{
    term: "Bill of Rights",
    category: "Constitutional Law",
    definition: "The part of the Constitution that protects individual rights and freedoms.",
    simple: "It protects citizens from government abuse.",
    example: "Freedom of speech is protected under the Bill of Rights.",
    related: "Constitution, Freedom, Due Process"
},
{
    term: "Human Rights",
    category: "Human Rights & Civil Liberties",
    definition: "Basic rights and freedoms that belong to every person.",
    simple: "These are rights people have because they are human.",
    example: "The right to life and dignity are human rights.",
    related: "Civil Rights, Justice, Freedom"
},
{
    term: "Liberty",
    category: "Political Theory & Ideologies",
    definition: "The condition of being free from unnecessary control or restriction.",
    simple: "It means having freedom.",
    example: "Freedom of expression is a form of liberty.",
    related: "Freedom, Rights, Democracy"
},
{
    term: "Justice",
    category: "Political Theory & Ideologies",
    definition: "The principle of fairness, equality, and giving people what is due to them.",
    simple: "Justice means fairness.",
    example: "Courts are expected to uphold justice.",
    related: "Law, Rights, Rule of Law"
},
{
    term: "Accountability",
    category: "Governance & Public Administration",
    definition: "The duty of officials and institutions to answer for their actions.",
    simple: "Leaders must explain and be responsible for what they do.",
    example: "Public officials may be investigated for corruption.",
    related: "Transparency, Governance, Responsibility"
},
{
    term: "Transparency",
    category: "Governance & Public Administration",
    definition: "The openness of government actions, decisions, and information to the public.",
    simple: "People can see what the government is doing.",
    example: "Publishing public budgets promotes transparency.",
    related: "Accountability, Good Governance, Public Trust"
},
{
    term: "Governance",
    category: "Governance & Public Administration",
    definition: "The process of making and implementing decisions in society.",
    simple: "It is how public affairs are managed.",
    example: "Good governance requires participation and accountability.",
    related: "Government, Policy, Accountability"
},
{
    term: "Public Policy",
    category: "Public Policy & Political Economy",
    definition: "A government plan or action created to address public problems.",
    simple: "It is a government solution to an issue.",
    example: "A scholarship program is a public policy.",
    related: "Governance, Law, Policy Implementation"
},
{
    term: "Policy Implementation",
    category: "Public Policy & Political Economy",
    definition: "The process of carrying out a public policy or government program.",
    simple: "It means putting a policy into action.",
    example: "Distributing aid is part of implementing a welfare policy.",
    related: "Public Policy, Bureaucracy, Governance"
},
{
    term: "Bureaucracy",
    category: "Governance & Public Administration",
    definition: "The system of government offices and officials that implement laws and policies.",
    simple: "It is the administrative machinery of government.",
    example: "Government agencies are part of the bureaucracy.",
    related: "Administration, Policy Implementation, Government"
},
{
    term: "Election",
    category: "Elections & Political Parties",
    definition: "A formal process where citizens choose leaders or decide public questions.",
    simple: "People vote to choose officials.",
    example: "National elections are held to choose the President and senators.",
    related: "Democracy, Voting, Representation"
},
{
    term: "Suffrage",
    category: "Elections & Political Parties",
    definition: "The right to vote in political elections.",
    simple: "It means the right to vote.",
    example: "Qualified Filipino citizens have the right of suffrage.",
    related: "Election, Voting, Citizenship"
},
{
    term: "Political Party",
    category: "Elections & Political Parties",
    definition: "An organized group that seeks political power through elections.",
    simple: "It is a group of people with shared political goals.",
    example: "Political parties nominate candidates for elections.",
    related: "Election, Campaign, Representation"
},
{
    term: "Ideology",
    category: "Political Theory & Ideologies",
    definition: "A set of political beliefs and ideas about how society should be organized.",
    simple: "It is a person or group’s political belief system.",
    example: "Liberalism and conservatism are ideologies.",
    related: "Liberalism, Conservatism, Political Theory"
},
{
    term: "Liberalism",
    category: "Political Theory & Ideologies",
    definition: "An ideology that emphasizes individual freedom, rights, equality, and limited government power.",
    simple: "It values freedom and rights.",
    example: "Freedom of speech is often associated with liberal ideas.",
    related: "Liberty, Rights, Ideology"
},
{
    term: "Conservatism",
    category: "Political Theory & Ideologies",
    definition: "An ideology that values tradition, social order, and gradual change.",
    simple: "It prefers preserving important traditions.",
    example: "A conservative may support slow reforms instead of sudden changes.",
    related: "Ideology, Tradition, Political Theory"
},
{
    term: "Socialism",
    category: "Political Theory & Ideologies",
    definition: "An ideology that supports greater social equality and public control or regulation of major resources.",
    simple: "It focuses on reducing inequality.",
    example: "Public welfare programs can reflect socialist ideas.",
    related: "Equality, Political Economy, Ideology"
},
{
    term: "Federalism",
    category: "Comparative Politics",
    definition: "A system where power is divided between a national government and regional governments.",
    simple: "Power is shared between central and local levels.",
    example: "The United States uses a federal system.",
    related: "Decentralization, Local Government, Constitution"
},
{
    term: "Decentralization",
    category: "Governance & Public Administration",
    definition: "The transfer of power or responsibility from the national government to local authorities.",
    simple: "Local governments get more power.",
    example: "Giving cities more authority is decentralization.",
    related: "Local Government, Federalism, Autonomy"
},
{
    term: "Local Government",
    category: "Philippine Government",
    definition: "Government units that manage public affairs in provinces, cities, municipalities, and barangays.",
    simple: "It is government closer to the people.",
    example: "Barangays are local government units.",
    related: "Decentralization, Governance, Public Service"
},
{
    term: "Civil Society",
    category: "Political Behavior & Research",
    definition: "Groups and organizations outside the government and business sector that participate in public life.",
    simple: "These are people’s groups that help influence society.",
    example: "NGOs and student organizations are part of civil society.",
    related: "Participation, Advocacy, Democracy"
},
{
    term: "Political Participation",
    category: "Political Behavior & Research",
    definition: "Actions by citizens to influence politics or government decisions.",
    simple: "It means taking part in politics.",
    example: "Voting, joining forums, and signing petitions are forms of participation.",
    related: "Democracy, Election, Civil Society"
},
{
    term: "Public Opinion",
    category: "Political Behavior & Research",
    definition: "The collective views and attitudes of people about public issues.",
    simple: "It is what people think about political issues.",
    example: "Surveys measure public opinion.",
    related: "Media, Political Communication, Democracy"
},
{
    term: "Political Culture",
    category: "Political Behavior & Research",
    definition: "The shared beliefs, values, and attitudes people have toward politics and government.",
    simple: "It is how people generally view politics.",
    example: "Trust in government is part of political culture.",
    related: "Public Opinion, Political Socialization, Citizenship"
},
{
    term: "Political Socialization",
    category: "Political Behavior & Research",
    definition: "The process by which people develop political beliefs and values.",
    simple: "It is how people learn politics.",
    example: "Family, school, and media shape political beliefs.",
    related: "Political Culture, Public Opinion, Media"
},
{
    term: "Diplomacy",
    category: "International Relations",
    definition: "The practice of managing relations between states through dialogue and negotiation.",
    simple: "Countries talk to solve issues.",
    example: "Ambassadors practice diplomacy.",
    related: "Foreign Policy, Treaty, International Relations"
},
{
    term: "Foreign Policy",
    category: "International Relations",
    definition: "A state’s strategy in dealing with other countries.",
    simple: "It is how a country acts toward other countries.",
    example: "The Philippines’ foreign policy includes relations with ASEAN countries.",
    related: "Diplomacy, National Interest, International Relations"
},
{
    term: "Treaty",
    category: "International Relations",
    definition: "A formal agreement between states or international actors.",
    simple: "It is an official agreement between countries.",
    example: "Countries may sign a treaty for peace or trade.",
    related: "Diplomacy, International Law, Agreement"
},
{
    term: "International Law",
    category: "International Relations",
    definition: "Rules and principles that guide relations among states and international actors.",
    simple: "It is law between countries.",
    example: "Maritime disputes may involve international law.",
    related: "Treaty, Sovereignty, United Nations"
},
{
    term: "United Nations",
    category: "International Relations",
    definition: "An international organization founded to promote peace, security, cooperation, and human rights.",
    simple: "It is a global organization of countries.",
    example: "The Philippines is a member of the United Nations.",
    related: "International Relations, Human Rights, Diplomacy"
},
{
    term: "ASEAN",
    category: "International Relations",
    definition: "The Association of Southeast Asian Nations, a regional organization in Southeast Asia.",
    simple: "It is a group of Southeast Asian countries.",
    example: "The Philippines is a founding member of ASEAN.",
    related: "Regionalism, Foreign Policy, International Cooperation"
},
{
    term: "Political Economy",
    category: "Public Policy & Political Economy",
    definition: "The study of how politics and economics influence each other.",
    simple: "It studies the connection between power and money.",
    example: "Taxes and public spending are political economy issues.",
    related: "Economy, Public Policy, Inequality"
},
{
    term: "Representation",
    category: "Elections & Political Parties",
    definition: "The act of elected officials speaking or acting on behalf of citizens.",
    simple: "Leaders represent the people.",
    example: "Members of Congress represent their districts or sectors.",
    related: "Election, Democracy, Legislature"
},
{
    term: "Citizenship",
    category: "Political Science",
    definition: "Membership in a state with rights, duties, and responsibilities.",
    simple: "It means being a recognized member of a country.",
    example: "Citizens have the right to vote and the duty to obey laws.",
    related: "Suffrage, Rights, State"
},
{
    term: "Authority",
    category: "Political Science",
    definition: "The recognized right to exercise power or make decisions.",
    simple: "It means accepted power.",
    example: "A court has authority to decide legal cases.",
    related: "Power, Legitimacy, Government"
},
{
    term: "Power",
    category: "Political Science",
    definition: "The ability to influence people, decisions, or events.",
    simple: "It means the ability to make things happen.",
    example: "Political leaders use power to shape policy.",
    related: "Authority, Influence, Politics"
},
{
    term: "Legitimacy",
    category: "Political Science",
    definition: "The acceptance of authority as rightful and valid.",
    simple: "People believe the government has the right to rule.",
    example: "Elections can give legitimacy to leaders.",
    related: "Authority, Democracy, Consent"
},
{
    term: "Consent of the Governed",
    category: "Political Theory & Ideologies",
    definition: "The idea that government authority comes from the approval of the people.",
    simple: "Government power should come from the people.",
    example: "Voting shows consent of the governed.",
    related: "Democracy, Legitimacy, Sovereignty"
},
{
    term: "Republic",
    category: "Political Science",
    definition: "A form of government where representatives are elected to govern on behalf of the people.",
    simple: "People elect leaders to represent them.",
    example: "The Philippines is a democratic and republican state.",
    related: "Democracy, Representation, Constitution"
},
{
    term: "Monarchy",
    category: "Comparative Politics",
    definition: "A form of government ruled by a king, queen, or monarch.",
    simple: "A royal family holds political power.",
    example: "Some countries still have constitutional monarchies.",
    related: "Government, Authority, Regime"
},
{
    term: "Authoritarianism",
    category: "Political Theory & Ideologies",
    definition: "A system where political power is concentrated in a leader or small group with limited public participation.",
    simple: "People have little control over government decisions.",
    example: "Authoritarian governments often restrict opposition.",
    related: "Dictatorship, Power, Regime"
},
{
    term: "Dictatorship",
    category: "Political Theory & Ideologies",
    definition: "A government ruled by one person or group with strong control and limited political freedom.",
    simple: "One ruler or group controls the government.",
    example: "A dictator may limit elections and free speech.",
    related: "Authoritarianism, Regime, Power"
},
{
    term: "Totalitarianism",
    category: "Political Theory & Ideologies",
    definition: "A system where the government attempts to control almost all aspects of public and private life.",
    simple: "The government controls nearly everything.",
    example: "Totalitarian states often control media and political activity.",
    related: "Authoritarianism, Dictatorship, Ideology"
},
{
    term: "Political System",
    category: "Political Science",
    definition: "The set of institutions, rules, and processes through which political decisions are made.",
    simple: "It is how politics works in a country.",
    example: "Democracy is a type of political system.",
    related: "Government, State, Institution"
},
{
    term: "Institution",
    category: "Political Science",
    definition: "An established organization or structure that shapes political behavior and decisions.",
    simple: "It is an important organized part of society.",
    example: "Congress and courts are political institutions.",
    related: "Government, Legislature, Judiciary"
},
{
    term: "Political Theory",
    category: "Political Theory & Ideologies",
    definition: "The study of political ideas such as justice, liberty, power, rights, and authority.",
    simple: "It studies the ideas behind politics.",
    example: "Plato and Aristotle are studied in political theory.",
    related: "Ideology, Justice, Liberty"
},
{
    term: "Comparative Politics",
    category: "Comparative Politics",
    definition: "The study and comparison of political systems, institutions, and behavior across countries.",
    simple: "It compares politics in different countries.",
    example: "Comparing the Philippines and the United States is comparative politics.",
    related: "Political System, Government, State"
},
{
    term: "International Relations",
    category: "International Relations",
    definition: "The study of interactions among states, international organizations, and global actors.",
    simple: "It studies how countries deal with each other.",
    example: "ASEAN cooperation is part of international relations.",
    related: "Diplomacy, Foreign Policy, Treaty"
},
{
    term: "National Interest",
    category: "International Relations",
    definition: "The goals and priorities a state seeks to protect or achieve in foreign policy.",
    simple: "It means what is important for a country.",
    example: "Security and economic growth are national interests.",
    related: "Foreign Policy, Sovereignty, Diplomacy"
},
{
    term: "Soft Power",
    category: "International Relations",
    definition: "The ability to influence others through culture, values, diplomacy, and attraction instead of force.",
    simple: "A country influences others without using violence.",
    example: "Scholarships and cultural exchanges can be soft power.",
    related: "Diplomacy, Influence, Foreign Policy"
},
{
    term: "Hard Power",
    category: "International Relations",
    definition: "The use of military or economic pressure to influence other states.",
    simple: "A country uses force or pressure to get results.",
    example: "Sanctions can be a form of hard power.",
    related: "Power, Foreign Policy, Security"
},
{
    term: "Sanctions",
    category: "International Relations",
    definition: "Penalties imposed by one or more states to influence another state’s behavior.",
    simple: "Countries punish another country to pressure it.",
    example: "Trade restrictions may be used as sanctions.",
    related: "Hard Power, Foreign Policy, International Law"
},
{
    term: "Alliance",
    category: "International Relations",
    definition: "An agreement between states to cooperate, usually for security or political goals.",
    simple: "Countries agree to support each other.",
    example: "States may form alliances for defense.",
    related: "Security, Treaty, Diplomacy"
},
{
    term: "National Security",
    category: "International Relations",
    definition: "The protection of a state’s people, territory, institutions, and interests from threats.",
    simple: "It means keeping the country safe.",
    example: "Defense policy is connected to national security.",
    related: "Sovereignty, Foreign Policy, Security"
},
{
    term: "Civil Service",
    category: "Governance & Public Administration",
    definition: "The body of government employees who carry out public administration.",
    simple: "These are workers in government service.",
    example: "Public school teachers and agency workers are part of civil service.",
    related: "Bureaucracy, Public Administration, Government"
},
{
    term: "Public Service",
    category: "Governance & Public Administration",
    definition: "Work or action done by government or officials for the benefit of the public.",
    simple: "It means serving the people.",
    example: "Providing health care and education are public services.",
    related: "Governance, Public Administration, Accountability"
},
{
    term: "Participation",
    category: "Governance & Public Administration",
    definition: "The involvement of citizens in public decision-making and political life.",
    simple: "People take part in decisions that affect them.",
    example: "Joining public consultations is participation.",
    related: "Democracy, Civil Society, Governance"
},
{
    term: "Responsiveness",
    category: "Governance & Public Administration",
    definition: "The ability of government institutions to answer public needs in a timely way.",
    simple: "Government responds to people’s concerns.",
    example: "Quick disaster relief shows responsiveness.",
    related: "Good Governance, Public Service, Accountability"
},
{
    term: "Equity",
    category: "Governance & Public Administration",
    definition: "Fairness in giving people access to opportunities, resources, and services based on their needs.",
    simple: "It means fair treatment, not always identical treatment.",
    example: "Scholarships for poor students promote equity.",
    related: "Justice, Equality, Public Policy"
},
{
    term: "Efficiency",
    category: "Governance & Public Administration",
    definition: "The ability to achieve goals using resources wisely and without waste.",
    simple: "It means doing things well with less waste.",
    example: "A fast and organized service system is efficient.",
    related: "Governance, Public Administration, Effectiveness"
},
{
    term: "Effectiveness",
    category: "Governance & Public Administration",
    definition: "The ability of a policy or institution to achieve its intended goals.",
    simple: "It means the plan actually works.",
    example: "A health program is effective if it improves public health.",
    related: "Efficiency, Public Policy, Policy Evaluation"
},
{
    term: "Policy Evaluation",
    category: "Public Policy & Political Economy",
    definition: "The process of assessing whether a public policy achieved its goals.",
    simple: "It checks if a government program worked.",
    example: "Reviewing a scholarship program is policy evaluation.",
    related: "Public Policy, Effectiveness, Governance"
},
{
    term: "Lawmaking",
    category: "Law & Jurisprudence",
    definition: "The process of creating, debating, approving, and enacting laws.",
    simple: "It is how laws are made.",
    example: "Congress performs lawmaking through bills.",
    related: "Legislature, Bill, Congress"
},
{
    term: "Bill",
    category: "Law & Jurisprudence",
    definition: "A proposed law presented for discussion and approval.",
    simple: "It is a law that is not approved yet.",
    example: "A senator may file a bill on education reform.",
    related: "Lawmaking, Legislature, Congress"
},
{
    term: "Statute",
    category: "Law & Jurisprudence",
    definition: "A written law passed by a legislative body.",
    simple: "It is an official law made by lawmakers.",
    example: "A Republic Act is a statute.",
    related: "Law, Legislature, Bill"
},
{
    term: "Ordinance",
    category: "Law & Jurisprudence",
    definition: "A local law passed by a local government unit.",
    simple: "It is a law for a city, municipality, or barangay.",
    example: "A city may pass an anti-littering ordinance.",
    related: "Local Government, Law, Governance"
},
{
    term: "Jurisprudence",
    category: "Law & Jurisprudence",
    definition: "Court decisions and legal principles used as guides in deciding future cases.",
    simple: "It means legal lessons from court decisions.",
    example: "Law students study jurisprudence from Supreme Court cases.",
    related: "Judiciary, Judicial Review, Law"
},
{
    term: "Precedent",
    category: "Law & Jurisprudence",
    definition: "A previous court decision used as a guide for deciding similar cases.",
    simple: "Past cases guide future cases.",
    example: "Judges may rely on precedent when deciding a case.",
    related: "Jurisprudence, Courts, Law"
},
{
    term: "Habeas Corpus",
    category: "Law & Jurisprudence",
    definition: "A legal remedy requiring authorities to bring a detained person before a court.",
    simple: "It protects people from illegal detention.",
    example: "A person detained without legal basis may ask for habeas corpus.",
    related: "Rights, Due Process, Court"
},
{
    term: "Warrant",
    category: "Law & Jurisprudence",
    definition: "A written order issued by a court allowing an arrest, search, or seizure.",
    simple: "It is court permission for certain law enforcement actions.",
    example: "Police usually need a warrant to search a house.",
    related: "Court, Rights, Due Process"
},
{
    term: "Probable Cause",
    category: "Law & Jurisprudence",
    definition: "Reasonable grounds to believe that a crime has been committed or that a person may be involved.",
    simple: "There must be enough reason before legal action.",
    example: "A judge checks probable cause before issuing a warrant.",
    related: "Warrant, Due Process, Criminal Justice"
},
{
    term: "Presumption of Innocence",
    category: "Law & Jurisprudence",
    definition: "The principle that a person is considered innocent until proven guilty.",
    simple: "An accused person is not automatically guilty.",
    example: "The prosecution must prove guilt beyond reasonable doubt.",
    related: "Due Process, Justice, Rights"
},
{
    term: "Separation of Church and State",
    category: "Constitutional Law",
    definition: "The constitutional principle that religion and government should remain institutionally separate.",
    simple: "Government should not control religion, and religion should not control government.",
    example: "The State cannot establish an official religion.",
    related: "Constitution, Freedom of Religion, Rights"
},
{
    term: "Freedom of Speech",
    category: "Human Rights & Civil Liberties",
    definition: "The right to express opinions and ideas without unnecessary government restriction.",
    simple: "People can speak and express their views.",
    example: "Citizens may criticize government policies.",
    related: "Bill of Rights, Liberty, Democracy"
},
{
    term: "Freedom of Religion",
    category: "Human Rights & Civil Liberties",
    definition: "The right to believe, worship, or not worship according to one’s conscience.",
    simple: "People are free to choose their religion.",
    example: "The government cannot force a person to follow a religion.",
    related: "Bill of Rights, Separation of Church and State, Liberty"
},
{
    term: "Right to Privacy",
    category: "Human Rights & Civil Liberties",
    definition: "The right of individuals to be protected from unreasonable intrusion into their personal life.",
    simple: "People have a right to personal privacy.",
    example: "Private communication is protected by law.",
    related: "Rights, Bill of Rights, Due Process"
},
{
    term: "Eminent Domain",
    category: "Constitutional Law",
    definition: "The power of the state to take private property for public use with just compensation.",
    simple: "Government can use private land for public needs but must pay fairly.",
    example: "Land may be taken for a public road with proper payment.",
    related: "Property Rights, Constitution, Public Use"
},
{
    term: "Police Power",
    category: "Constitutional Law",
    definition: "The power of the state to regulate behavior for public health, safety, morals, and welfare.",
    simple: "Government can make rules to protect the public.",
    example: "Traffic laws are examples of police power.",
    related: "State Power, Public Welfare, Law"
},
{
    term: "Taxation",
    category: "Public Policy & Political Economy",
    definition: "The power of the government to collect money from people and businesses to fund public needs.",
    simple: "Government collects taxes to provide services.",
    example: "Taxes help fund roads, schools, and hospitals.",
    related: "Public Finance, Government, Public Service"
},
{
    term: "Public Finance",
    category: "Public Policy & Political Economy",
    definition: "The study and management of government revenue, spending, budgeting, and debt.",
    simple: "It is how government handles money.",
    example: "The national budget is part of public finance.",
    related: "Taxation, Budget, Governance"
},
{
    term: "Budget",
    category: "Public Policy & Political Economy",
    definition: "A financial plan showing expected government income and spending.",
    simple: "It shows where public money goes.",
    example: "The national budget funds agencies and programs.",
    related: "Public Finance, Taxation, Public Policy"
},
{
    term: "Corruption",
    category: "Governance & Public Administration",
    definition: "The misuse of public power or resources for private gain.",
    simple: "It means abusing power for personal benefit.",
    example: "Stealing public funds is corruption.",
    related: "Accountability, Transparency, Good Governance"
},
{
    term: "Patronage Politics",
    category: "Elections & Political Parties",
    definition: "A political practice where support is exchanged for favors, jobs, money, or benefits.",
    simple: "Supporters get favors in exchange for political loyalty.",
    example: "A politician may promise jobs to supporters.",
    related: "Clientelism, Political Party, Election"
},
{
    term: "Clientelism",
    category: "Elections & Political Parties",
    definition: "A system where politicians provide favors or benefits in exchange for political support.",
    simple: "Votes or support are exchanged for help or rewards.",
    example: "Vote buying is connected to clientelism.",
    related: "Patronage Politics, Election, Corruption"
},
{
    term: "Political Dynasty",
    category: "Philippine Government",
    definition: "A situation where members of the same family hold political positions across time or levels of government.",
    simple: "Politics is controlled by the same family.",
    example: "Several relatives serving in government may form a political dynasty.",
    related: "Election, Representation, Philippine Politics"
},
{
    term: "Anarchism",
    category: "Political Theory & Ideologies",
    definition: "A political ideology that rejects centralized government authority and supports a society organized through voluntary cooperation.",
    simple: "It believes people can organize society without a strong government.",
    example: "Some anarchist thinkers argue that communities can govern themselves without a state.",
    related: "State, Authority, Libertarianism"
},
{
    term: "Communism",
    category: "Political Theory & Ideologies",
    definition: "A political and economic ideology that seeks a classless society where major resources are commonly owned.",
    simple: "It aims for shared ownership and the removal of social classes.",
    example: "Communism became influential in many revolutionary movements during the 20th century.",
    related: "Marxism, Socialism, Political Economy"
},
{
    term: "Fascism",
    category: "Political Theory & Ideologies",
    definition: "An authoritarian ideology that emphasizes extreme nationalism, centralized power, and strict social control.",
    simple: "It supports strong state control and intense nationalism.",
    example: "Fascist regimes often suppress opposition and limit civil liberties.",
    related: "Authoritarianism, Nationalism, Totalitarianism"
},
{
    term: "Marxism",
    category: "Political Theory & Ideologies",
    definition: "A political and economic theory that analyzes society through class struggle and the conflict between workers and owners.",
    simple: "It explains politics and society through class conflict.",
    example: "Marxism influenced socialist and communist movements around the world.",
    related: "Communism, Socialism, Political Economy"
},
{
    term: "Nationalism",
    category: "Political Theory & Ideologies",
    definition: "An ideology that emphasizes loyalty, identity, and pride in one’s nation.",
    simple: "It means strong attachment to one’s nation.",
    example: "Nationalism helped shape independence movements in many colonized countries.",
    related: "Nation, State, Sovereignty"
},
{
    term: "Republicanism",
    category: "Political Theory & Ideologies",
    definition: "A political idea that supports government by representatives and emphasizes civic virtue and the common good.",
    simple: "It supports representative government and public responsibility.",
    example: "The Philippines describes itself as a democratic and republican state.",
    related: "Republic, Democracy, Representation"
},
{
    term: "Democratic Socialism",
    category: "Political Theory & Ideologies",
    definition: "An ideology that supports democracy while promoting social ownership, welfare policies, and economic equality.",
    simple: "It combines democratic government with policies that reduce inequality.",
    example: "Democratic socialists often support strong public services and social welfare programs.",
    related: "Socialism, Democracy, Welfare State"
},
{
    term: "Libertarianism",
    category: "Political Theory & Ideologies",
    definition: "An ideology that emphasizes individual liberty, limited government, and personal responsibility.",
    simple: "It wants less government control over people’s lives.",
    example: "Libertarians often support free markets and strong protection of individual rights.",
    related: "Liberty, Limited Government, Individual Rights"
},
{
    term: "Populism",
    category: "Political Theory & Ideologies",
    definition: "A political approach that claims to represent ordinary people against elites or established institutions.",
    simple: "It presents politics as a struggle between the people and the elites.",
    example: "Populist leaders often use direct appeals to public frustration.",
    related: "Political Participation, Public Opinion, Democracy"
},
{
    term: "Feminism",
    category: "Political Theory & Ideologies",
    definition: "A political and social movement that seeks equality between genders in rights, opportunities, and representation.",
    simple: "It supports equal rights and opportunities for all genders.",
    example: "Feminist movements have pushed for voting rights, workplace equality, and protection from discrimination.",
    related: "Equality, Human Rights, Civil Rights"
},
{
    term: "Social Contract",
    category: "Political Theory & Ideologies",
    definition: "A theory that government authority comes from an agreement among people to form a political community.",
    simple: "People accept government because it protects order and rights.",
    example: "Hobbes, Locke, and Rousseau developed different versions of social contract theory.",
    related: "Consent of the Governed, State, Legitimacy"
},
{
    term: "Pluralism",
    category: "Political Theory & Ideologies",
    definition: "The idea that political power is shared among many groups, interests, and organizations in society.",
    simple: "Many groups compete and participate in politics.",
    example: "Civil society organizations, parties, and interest groups can all influence public policy.",
    related: "Civil Society, Democracy, Political Participation"
},
{
    term: "Elitism",
    category: "Political Theory & Ideologies",
    definition: "The theory that political power is concentrated in the hands of a small group of influential elites.",
    simple: "A few powerful people control major decisions.",
    example: "Elite theory studies how wealthy or influential groups shape politics.",
    related: "Power, Authority, Political Inequality"
},
{
    term: "Corporatism",
    category: "Political Theory & Ideologies",
    definition: "A system where major social and economic groups are formally involved in government decision-making.",
    simple: "Government works with organized groups like labor, business, or professional sectors.",
    example: "Some governments consult labor unions and business associations in policymaking.",
    related: "Interest Groups, Governance, Public Policy"
},
{
    term: "Utilitarianism",
    category: "Political Theory & Ideologies",
    definition: "A moral and political theory that judges actions by their ability to produce the greatest good for the greatest number.",
    simple: "A policy is good if it benefits the most people.",
    example: "Public policies are sometimes defended using utilitarian reasoning.",
    related: "Justice, Public Policy, Common Good"
},
{
    term: "Semi-Presidential System",
    category: "Comparative Politics",
    definition: "A system of government with both a president and a prime minister sharing executive authority.",
    simple: "Power is shared between a president and a prime minister.",
    example: "France is often cited as an example of a semi-presidential system.",
    related: "President, Prime Minister, Comparative Politics"
},
{
    term: "Federal State",
    category: "Comparative Politics",
    definition: "A state where power is constitutionally divided between national and regional governments.",
    simple: "Power is shared between central and regional governments.",
    example: "The United States and Germany are federal states.",
    related: "Federalism, Unitary State, Decentralization"
},
{
    term: "Bicameralism",
    category: "Philippine Government",
    definition: "A legislative system with two chambers or houses.",
    simple: "The lawmaking body has two houses.",
    example: "The Philippine Congress is bicameral because it has the Senate and the House of Representatives.",
    related: "Legislature, Senate, House of Representatives"
},
{
    term: "Unicameralism",
    category: "Comparative Politics",
    definition: "A legislative system with only one chamber or house.",
    simple: "The lawmaking body has one house.",
    example: "Some countries use a unicameral legislature to simplify lawmaking.",
    related: "Bicameralism, Legislature, Comparative Politics"
},
{
    term: "Legitimacy Crisis",
    category: "Political Science",
    definition: "A situation where people lose confidence in the rightful authority of a government or institution.",
    simple: "People stop believing that leaders have the right to rule.",
    example: "Corruption scandals can contribute to a legitimacy crisis.",
    related: "Legitimacy, Authority, Public Trust"
},
{
    term: "Referendum",
    category: "Elections & Political Parties",
    definition: "A direct vote by citizens on a specific political or legal question.",
    simple: "People vote directly on an issue.",
    example: "A referendum may be used to decide major constitutional or policy questions.",
    related: "Plebiscite, Initiative, Direct Democracy"
},
{
    term: "Initiative",
    category: "Elections & Political Parties",
    definition: "A process where citizens can propose laws or constitutional changes through a petition and vote.",
    simple: "People can start a proposal for a law or change.",
    example: "People’s initiative is recognized in Philippine constitutional processes.",
    related: "Referendum, Plebiscite, Popular Sovereignty"
},
{
    term: "Recall",
    category: "Elections & Political Parties",
    definition: "A process that allows voters to remove an elected official before the end of the term.",
    simple: "Voters can remove an official early.",
    example: "Recall elections are used in some systems to hold officials accountable.",
    related: "Election, Accountability, Political Participation"
},
{
    term: "Plebiscite",
    category: "Elections & Political Parties",
    definition: "A vote by the people to approve or reject a major political or constitutional proposal.",
    simple: "People vote to approve or reject an important change.",
    example: "Constitutional changes may be submitted to the people through a plebiscite.",
    related: "Referendum, Initiative, Constitution"
},
{
    term: "Gerrymandering",
    category: "Elections & Political Parties",
    definition: "The manipulation of electoral district boundaries to favor a political party or group.",
    simple: "District lines are drawn unfairly to help one side win.",
    example: "Gerrymandering can weaken fair representation in elections.",
    related: "Election, Representation, Electoral District"
},
{
    term: "Democratization",
    category: "Political Science",
    definition: "The process of becoming more democratic through elections, rights protection, participation, and accountable institutions.",
    simple: "It means a country becomes more democratic.",
    example: "The 1986 People Power Revolution is often connected to democratization in the Philippines.",
    related: "Democracy, Election, Civil Society"
},
{
    term: "Political Socialization Agents",
    category: "Political Behavior & Research",
    definition: "Institutions or groups that shape a person’s political beliefs, values, and attitudes.",
    simple: "These are things that teach people about politics.",
    example: "Family, school, media, religion, and peers are agents of political socialization.",
    related: "Political Socialization, Political Culture, Public Opinion"
},
{
    term: "Mass Media",
    category: "Political Behavior & Research",
    definition: "Communication platforms that spread information to large audiences and influence public opinion.",
    simple: "Media helps shape what people know and think about politics.",
    example: "Television, newspapers, and social media can influence election discussions.",
    related: "Public Opinion, Political Communication, Agenda-Setting"
},
{
    term: "Agenda-Setting",
    category: "Political Behavior & Research",
    definition: "The process by which media, leaders, or institutions influence which issues people consider important.",
    simple: "It explains how some issues become the focus of public attention.",
    example: "News coverage can make corruption or inflation a major public concern.",
    related: "Mass Media, Public Opinion, Political Communication"
},
{
    term: "Framing",
    category: "Political Behavior & Research",
    definition: "The way information is presented to influence how people understand an issue.",
    simple: "It is how a topic is shown or explained to shape opinion.",
    example: "A protest may be framed as public participation or as public disorder.",
    related: "Mass Media, Political Communication, Public Opinion"
},
{
    term: "Interest Group",
    category: "Governance & Public Administration",
    definition: "An organized group that seeks to influence public policy without directly controlling government.",
    simple: "It is a group that pressures government to support its interests.",
    example: "Labor groups may lobby for higher wages and better working conditions.",
    related: "Civil Society, Lobbying, Public Policy"
},
{
    term: "Lobbying",
    category: "Governance & Public Administration",
    definition: "The act of trying to influence government officials or lawmakers on a policy issue.",
    simple: "It means persuading officials to support a policy or decision.",
    example: "A business group may lobby Congress about tax policy.",
    related: "Interest Group, Public Policy, Legislature"
},
{
    term: "Civilian Supremacy",
    category: "Political Science",
    definition: "The principle that the military must remain under the authority of civilian government.",
    simple: "Elected civilian leaders should control the military.",
    example: "Civilian supremacy is important in democratic governments.",
    related: "Democracy, State, National Security"
},
{
    term: "Civil-Military Relations",
    category: "Political Science",
    definition: "The study of the relationship between civilian authorities and the military.",
    simple: "It studies how government and the military interact.",
    example: "Political Science studies civil-military relations to protect democratic control.",
    related: "Civilian Supremacy, National Security, State"
},
{
    term: "Devolution",
    category: "Governance & Public Administration",
    definition: "The transfer of powers, functions, and responsibilities from the national government to local governments.",
    simple: "Local governments receive more authority from the national government.",
    example: "The Local Government Code strengthened devolution in the Philippines.",
    related: "Decentralization, Local Government, Public Administration"
},
{
    term: "Autonomy",
    category: "Governance & Public Administration",
    definition: "The power of a local or regional unit to govern certain matters on its own.",
    simple: "It means having a degree of self-government.",
    example: "The Bangsamoro region has regional autonomy under Philippine law.",
    related: "Decentralization, Local Government, Regional Autonomy"
},
{
    term: "Regional Autonomy",
    category: "Governance & Public Administration",
    definition: "A system where a region is given special self-governing powers while remaining part of the state.",
    simple: "A region can manage some of its own affairs.",
    example: "The Bangsamoro Autonomous Region is an example of regional autonomy in the Philippines.",
    related: "Autonomy, Decentralization, Local Government"
},
{
    term: "Policy Analysis",
    category: "Public Policy & Political Economy",
    definition: "The systematic study of policy problems, options, effects, and possible solutions.",
    simple: "It studies which policy choice is best.",
    example: "Policy analysis can compare different ways to reduce poverty.",
    related: "Public Policy, Policy Evaluation, Evidence-Based Policymaking"
},
{
    term: "Evidence-Based Policymaking",
    category: "Public Policy & Political Economy",
    definition: "The use of research, data, and evidence to guide public policy decisions.",
    simple: "Government decisions should be based on facts and research.",
    example: "Using poverty statistics to design social programs is evidence-based policymaking.",
    related: "Policy Analysis, Public Policy, Policy Evaluation"
},
{
    term: "Welfare State",
    category: "Public Policy & Political Economy",
    definition: "A state that provides social services and protections such as health care, education, pensions, and welfare assistance.",
    simple: "Government helps protect people’s basic social needs.",
    example: "Scholarships, health programs, and social pensions are connected to welfare policies.",
    related: "Public Policy, Social Democracy, Political Economy"
},
{
    term: "Dependency Theory",
    category: "Public Policy & Political Economy",
    definition: "A theory that explains underdevelopment as the result of unequal economic relationships between rich and poor countries.",
    simple: "Poor countries may remain poor because of unfair global economic systems.",
    example: "Dependency theory is often discussed in development studies and political economy.",
    related: "Political Economy, Development, Globalization"
},
{
    term: "Development",
    category: "Public Policy & Political Economy",
    definition: "The process of improving economic conditions, social welfare, institutions, and quality of life.",
    simple: "It means improving people’s lives and society’s conditions.",
    example: "Education, health, employment, and infrastructure are part of development policy.",
    related: "Public Policy, Political Economy, Political Development"
},
{
    term: "Global South",
    category: "International Relations",
    definition: "A term often used to refer to developing countries in Africa, Latin America, Asia, and parts of Oceania.",
    simple: "It refers to many developing countries around the world.",
    example: "Many Global South countries discuss inequality, development, and climate justice in international forums.",
    related: "Development, Dependency Theory, Globalization"
},
{
    term: "Realism",
    category: "International Relations",
    definition: "A theory of international relations that emphasizes power, national interest, and state survival.",
    simple: "Countries act mainly to protect their own power and security.",
    example: "Realists often explain alliances and conflicts through national interest.",
    related: "National Interest, Balance of Power, Security"
},
{
    term: "Liberal Institutionalism",
    category: "International Relations",
    definition: "A theory that emphasizes cooperation among states through international organizations, rules, and institutions.",
    simple: "Countries can cooperate through organizations and agreements.",
    example: "The United Nations and WTO are often discussed in liberal institutionalist theory.",
    related: "International Organization, United Nations, Multilateralism"
},
{
    term: "Constructivism",
    category: "International Relations",
    definition: "A theory that emphasizes how ideas, identities, norms, and beliefs shape international politics.",
    simple: "What countries believe and value can affect how they act.",
    example: "Constructivists study how national identity influences foreign policy.",
    related: "Identity, Norms, International Relations"
},
{
    term: "Multilateralism",
    category: "International Relations",
    definition: "Cooperation among three or more states, usually through international organizations or agreements.",
    simple: "Many countries work together on one issue.",
    example: "ASEAN and the United Nations promote multilateral cooperation.",
    related: "Diplomacy, United Nations, International Relations"
},
{
    term: "Bilateral Relations",
    category: "International Relations",
    definition: "Relations between two states involving diplomacy, trade, security, or cooperation.",
    simple: "It is the relationship between two countries.",
    example: "Philippines-Japan relations include trade, aid, and security cooperation.",
    related: "Diplomacy, Foreign Policy, Treaty"
},
{
    term: "International Organization",
    category: "International Relations",
    definition: "An institution formed by states or other actors to cooperate on international issues.",
    simple: "It is an organization that works across countries.",
    example: "The United Nations and ASEAN are international organizations.",
    related: "United Nations, ASEAN, Multilateralism"
},
{
    term: "Executive Order",
    category: "Philippine Government",
    definition: "An official directive issued by the President to manage government operations or implement laws.",
    simple: "It is an order from the President.",
    example: "An executive order may reorganize government offices or guide agencies.",
    related: "President, Executive, Official Gazette"
},
{
    term: "Republic Act",
    category: "Law & Jurisprudence",
    definition: "A law passed by Congress and approved by the President or allowed to lapse into law.",
    simple: "It is an official national law.",
    example: "Republic Acts are used to create laws on education, health, taxation, and public safety.",
    related: "Lawmaking, Bill, Congress"
},
{
    term: "Administrative Order",
    category: "Philippine Government",
    definition: "A presidential issuance that deals with administrative matters in government.",
    simple: "It is an order about how government offices should work.",
    example: "An administrative order may create a task force or direct agencies to act on an issue.",
    related: "Executive Order, President, Public Administration"
},
{
    term: "Proclamation",
    category: "Philippine Government",
    definition: "An official public declaration issued by the President.",
    simple: "It is a formal announcement from the President.",
    example: "A proclamation may declare a holiday or a state of calamity.",
    related: "President, Executive Order, Official Gazette"
},
{
    term: "Memorandum Circular",
    category: "Philippine Government",
    definition: "An official instruction or reminder issued to government agencies or officials.",
    simple: "It gives directions or reminders to government offices.",
    example: "A memorandum circular may instruct agencies about work arrangements or procedures.",
    related: "Public Administration, Executive, Government Agencies"
},
{
    term: "Ombudsman",
    category: "Philippine Government",
    definition: "An independent office that investigates and prosecutes public officials accused of wrongdoing.",
    simple: "It checks corruption and abuse by public officials.",
    example: "The Ombudsman may investigate cases involving misuse of public funds.",
    related: "Corruption, Accountability, Public Office"
},
{
    term: "Commission on Elections",
    category: "Philippine Government",
    definition: "A constitutional commission responsible for enforcing election laws and administering elections in the Philippines.",
    simple: "COMELEC manages elections.",
    example: "COMELEC supervises national and local elections.",
    related: "Election, Suffrage, Constitutional Commission"
},
{
    term: "Commission on Audit",
    category: "Philippine Government",
    definition: "A constitutional commission that examines government funds, spending, and property.",
    simple: "COA checks how public money is used.",
    example: "COA audits government agencies to promote accountability.",
    related: "Public Finance, Accountability, Constitutional Commission"
},
{
    term: "Civil Service Commission",
    category: "Philippine Government",
    definition: "A constitutional commission that oversees the civil service and promotes merit-based public employment.",
    simple: "CSC manages rules for government workers.",
    example: "The Civil Service Commission handles qualifications and discipline in government service.",
    related: "Civil Service, Merit System, Constitutional Commission"
},
{
    term: "Department of the Interior and Local Government",
    category: "Philippine Government",
    definition: "The executive department that supervises local governments and promotes public order and safety.",
    simple: "DILG works with local governments and public safety agencies.",
    example: "The DILG coordinates with provinces, cities, municipalities, and barangays.",
    related: "Local Government, Decentralization, Public Administration"
},
{
    term: "Department of Justice",
    category: "Philippine Government",
    definition: "The executive department responsible for legal affairs, prosecution, and the administration of justice.",
    simple: "DOJ handles legal and justice-related matters for the government.",
    example: "The DOJ supervises prosecutors and provides legal services to the government.",
    related: "Justice, Law & Jurisprudence, Executive"
},
{
    term: "National Economic and Development Authority",
    category: "Philippine Government",
    definition: "The government agency responsible for economic planning and development coordination.",
    simple: "NEDA helps plan the country’s development.",
    example: "NEDA prepares development plans and reviews major government projects.",
    related: "Development, Public Policy, Political Economy"
},
{
    term: "Department of Budget and Management",
    category: "Philippine Government",
    definition: "The executive department that prepares and manages the national government budget.",
    simple: "DBM helps manage the government’s budget.",
    example: "DBM prepares the national expenditure program submitted to Congress.",
    related: "Budget, Public Finance, Public Policy"
},
{
    term: "Sangguniang Panlalawigan",
    category: "Philippine Government",
    definition: "The legislative body of a province in the Philippines.",
    simple: "It is the provincial council.",
    example: "The Sangguniang Panlalawigan passes provincial ordinances.",
    related: "Local Government, Ordinance, Province"
},
{
    term: "Sangguniang Panlungsod",
    category: "Philippine Government",
    definition: "The legislative body of a city in the Philippines.",
    simple: "It is the city council.",
    example: "The Sangguniang Panlungsod passes city ordinances.",
    related: "Local Government, Ordinance, City"
},
{
    term: "Sangguniang Bayan",
    category: "Philippine Government",
    definition: "The legislative body of a municipality in the Philippines.",
    simple: "It is the municipal council.",
    example: "The Sangguniang Bayan passes municipal ordinances.",
    related: "Local Government, Ordinance, Municipality"
},
{
    term: "Punong Barangay",
    category: "Philippine Government",
    definition: "The elected chief executive of a barangay.",
    simple: "It means barangay captain.",
    example: "The Punong Barangay leads barangay programs and services.",
    related: "Barangay, Local Government, Sangguniang Barangay"
},
{
    term: "Sangguniang Kabataan",
    category: "Philippine Government",
    definition: "The youth council in a barangay that represents young people in local governance.",
    simple: "It is the youth council of the barangay.",
    example: "The Sangguniang Kabataan creates youth programs and projects.",
    related: "Local Government, Youth Participation, Barangay"
},
{
    term: "Constitutional Commission",
    category: "Constitutional Law",
    definition: "An independent body created by the Constitution to perform specific government functions.",
    simple: "It is an independent commission protected by the Constitution.",
    example: "COMELEC, COA, and CSC are constitutional commissions.",
    related: "COMELEC, COA, CSC"
},
{
    term: "Judicial Activism",
    category: "Constitutional Law",
    definition: "A judicial approach where courts actively interpret the Constitution or laws to address social or political issues.",
    simple: "Courts take an active role in shaping legal meaning.",
    example: "Some decisions are described as judicial activism when courts strongly influence public policy.",
    related: "Judicial Review, Judiciary, Constitution"
},
{
    term: "Judicial Restraint",
    category: "Constitutional Law",
    definition: "A judicial approach where courts avoid interfering with decisions of the political branches unless clearly necessary.",
    simple: "Courts limit their role and avoid overstepping.",
    example: "A court may use judicial restraint by deferring to Congress on policy matters.",
    related: "Judicial Review, Separation of Powers, Judiciary"
},
{
    term: "Ex Post Facto Law",
    category: "Constitutional Law",
    definition: "A law that punishes an act that was not criminal when it was committed or increases punishment after the act.",
    simple: "A person cannot be punished by a law made after the act.",
    example: "The Constitution prohibits ex post facto laws.",
    related: "Bill of Rights, Due Process, Criminal Law"
},
{
    term: "Bill of Attainder",
    category: "Constitutional Law",
    definition: "A law that declares a person or group guilty without a judicial trial.",
    simple: "The legislature cannot declare someone guilty without court proceedings.",
    example: "The Constitution prohibits bills of attainder.",
    related: "Due Process, Bill of Rights, Separation of Powers"
},
{
    term: "Double Jeopardy",
    category: "Constitutional Law",
    definition: "The protection against being tried or punished twice for the same offense after a valid judgment.",
    simple: "A person should not be tried twice for the same offense.",
    example: "Double jeopardy protects an accused person from repeated prosecution for the same case.",
    related: "Due Process, Presumption of Innocence, Bill of Rights"
},
{
    term: "Search and Seizure",
    category: "Constitutional Law",
    definition: "A legal process involving the examination of persons or property and the taking of evidence by authorities.",
    simple: "Police searches and taking evidence must follow legal rules.",
    example: "The Constitution protects people from unreasonable searches and seizures.",
    related: "Warrant, Right to Privacy, Bill of Rights"
},
{
    term: "Writ of Amparo",
    category: "Constitutional Law",
    definition: "A legal remedy that protects a person’s right to life, liberty, and security against threats or violations.",
    simple: "It protects people from serious threats to life, liberty, or safety.",
    example: "A writ of amparo may be used in cases involving enforced disappearance or threats.",
    related: "Human Rights, Due Process, Supreme Court"
},
{
    term: "Writ of Habeas Data",
    category: "Constitutional Law",
    definition: "A legal remedy that protects a person’s right to privacy, especially regarding personal information.",
    simple: "It protects people from misuse of personal data.",
    example: "A person may seek habeas data if government records threaten privacy or security.",
    related: "Right to Privacy, Human Rights, Writ of Amparo"
},
{
    term: "Writ of Kalikasan",
    category: "Constitutional Law",
    definition: "A legal remedy that protects the constitutional right to a balanced and healthful ecology.",
    simple: "It protects people and communities from serious environmental harm.",
    example: "The writ of kalikasan may be used in cases involving major environmental damage.",
    related: "Environmental Rights, Constitution, Supreme Court"
},
{
    term: "Impeachment",
    category: "Constitutional Law",
    definition: "A constitutional process for removing certain high-ranking public officials for serious offenses.",
    simple: "It is a legal process to remove top officials from office.",
    example: "Presidents, Supreme Court justices, and constitutional commissioners may be subject to impeachment.",
    related: "Accountability, Constitution, Public Office"
},
{
    term: "Globalization",
    category: "International Relations",
    definition: "The increasing interconnectedness of countries through trade, communication, technology, culture, and politics.",
    simple: "Countries become more connected to one another.",
    example: "International trade and social media are examples of globalization.",
    related: "International Relations, Trade, Development"
},
{
    term: "Geopolitics",
    category: "International Relations",
    definition: "The study of how geography influences politics, foreign policy, and international relations.",
    simple: "Location affects how countries make political decisions.",
    example: "The South China Sea dispute is a geopolitical issue.",
    related: "Foreign Policy, National Interest, Sovereignty"
},
{
    term: "Balance of Power",
    category: "International Relations",
    definition: "A situation where no single state becomes powerful enough to dominate others.",
    simple: "Countries try to keep power evenly distributed.",
    example: "Military alliances often aim to maintain the balance of power.",
    related: "Alliance, National Security, Realism"
},
{
    term: "Deterrence",
    category: "International Relations",
    definition: "The strategy of preventing an action by threatening serious consequences.",
    simple: "Discouraging conflict through the threat of retaliation.",
    example: "Strong military capability can serve as deterrence.",
    related: "National Security, Hard Power, Defense"
},
{
    term: "Peacekeeping",
    category: "International Relations",
    definition: "International efforts to help maintain or restore peace in areas affected by conflict.",
    simple: "Helping countries maintain peace after conflicts.",
    example: "United Nations peacekeepers are deployed in conflict zones.",
    related: "United Nations, Collective Security, Diplomacy"
},
{
    term: "United Nations Security Council",
    category: "International Relations",
    definition: "The principal UN body responsible for maintaining international peace and security.",
    simple: "It makes major decisions on global peace and security.",
    example: "The Security Council may approve peacekeeping missions.",
    related: "United Nations, Peacekeeping, International Law"
},
{
    term: "International Court of Justice",
    category: "International Relations",
    definition: "The principal judicial organ of the United Nations that settles disputes between states.",
    simple: "The world's highest court for disputes between countries.",
    example: "States may bring territorial disputes before the ICJ.",
    related: "United Nations, International Law, Treaty"
},
{
    term: "International Criminal Court",
    category: "International Relations",
    definition: "An international court that prosecutes individuals accused of genocide, crimes against humanity, war crimes, and aggression.",
    simple: "It tries people accused of the world's most serious crimes.",
    example: "The ICC investigates international criminal cases.",
    related: "International Law, Human Rights, Justice"
},
{
    term: "UNCLOS",
    category: "International Relations",
    definition: "The United Nations Convention on the Law of the Sea, which establishes rules governing the use of oceans and maritime resources.",
    simple: "It sets international rules for the world's oceans.",
    example: "The Philippines relies on UNCLOS in maritime disputes.",
    related: "International Law, Sovereignty, Maritime Law"
},
{
    term: "World Trade Organization",
    category: "International Relations",
    definition: "An international organization that regulates global trade between nations.",
    simple: "It helps countries trade fairly.",
    example: "Trade disputes may be resolved through the WTO.",
    related: "Globalization, Trade, International Organization"
},
{
    term: "North Atlantic Treaty Organization",
    category: "International Relations",
    definition: "A military alliance established to promote collective defense among its member states.",
    simple: "A defense alliance between member countries.",
    example: "NATO members cooperate on security issues.",
    related: "Alliance, Collective Security, Defense"
},
{
    term: "European Union",
    category: "International Relations",
    definition: "A political and economic union of European countries that cooperate on common policies.",
    simple: "A group of European countries working together.",
    example: "EU member states share economic and political cooperation.",
    related: "Regionalism, International Organization, Trade"
},
{
    term: "Regionalism",
    category: "International Relations",
    definition: "Cooperation among countries within the same geographic region.",
    simple: "Neighboring countries work together.",
    example: "ASEAN promotes regionalism in Southeast Asia.",
    related: "ASEAN, International Relations, Cooperation"
},
{
    term: "Foreign Aid",
    category: "International Relations",
    definition: "Economic, military, or humanitarian assistance provided by one country to another.",
    simple: "Countries help other countries through assistance.",
    example: "Foreign aid may support disaster recovery or development.",
    related: "Development, Diplomacy, International Cooperation"
},
{
    term: "Political Campaign",
    category: "Elections & Political Parties",
    definition: "Organized activities by candidates or parties to gain public support during elections.",
    simple: "Candidates campaign to win votes.",
    example: "Campaign rallies and debates are common campaign activities.",
    related: "Election, Political Party, Candidate"
},
{
    term: "Plurality Voting",
    category: "Elections & Political Parties",
    definition: "An electoral system where the candidate with the most votes wins, even without a majority.",
    simple: "The highest number of votes wins.",
    example: "Many local elections use plurality voting.",
    related: "Election, Majority Vote, Voting"
},
{
    term: "Majority Vote",
    category: "Elections & Political Parties",
    definition: "More than half of all valid votes cast.",
    simple: "Winning with over 50% of the votes.",
    example: "Some elections require a majority vote to win.",
    related: "Plurality Voting, Election, Democracy"
},
{
    term: "Proportional Representation",
    category: "Elections & Political Parties",
    definition: "An electoral system where seats are distributed based on the proportion of votes received.",
    simple: "Parties receive seats based on their share of votes.",
    example: "Many parliamentary countries use proportional representation.",
    related: "Political Party, Legislature, Election"
},
{
    term: "Electoral College",
    category: "Comparative Politics",
    definition: "A system in which elected representatives formally choose the head of state or government.",
    simple: "Representatives officially choose the winner.",
    example: "The United States uses an Electoral College for presidential elections.",
    related: "Presidential System, Election, Comparative Politics"
},
{
    term: "Campaign Finance",
    category: "Elections & Political Parties",
    definition: "The regulation and management of money used in election campaigns.",
    simple: "Rules about money spent during campaigns.",
    example: "Campaign finance laws limit contributions and expenditures.",
    related: "Election, Political Party, Transparency"
},
{
    term: "Opinion Poll",
    category: "Elections & Political Parties",
    definition: "A survey measuring public opinion on political issues or candidates.",
    simple: "A survey asking people about politics.",
    example: "Opinion polls measure voter preferences before elections.",
    related: "Public Opinion, Survey, Election"
},
{
    term: "Exit Poll",
    category: "Elections & Political Parties",
    definition: "A survey conducted immediately after voters leave polling places.",
    simple: "A survey of people who have already voted.",
    example: "Exit polls estimate election results before official counting.",
    related: "Election, Opinion Poll, Voting"
},
{
    term: "Party-list System",
    category: "Philippine Government",
    definition: "A system of representation where accredited organizations compete for seats in the House of Representatives.",
    simple: "Special groups can gain seats in Congress.",
    example: "Labor and youth groups may participate in the party-list election.",
    related: "House of Representatives, Election, Representation"
},
{
    term: "Political Platform",
    category: "Elections & Political Parties",
    definition: "A set of principles, goals, and policies promoted by a candidate or political party.",
    simple: "The promises and plans of a candidate or party.",
    example: "Candidates present their platform during campaigns.",
    related: "Political Party, Campaign, Public Policy"
},
{
    term: "Term Limit",
    category: "Constitutional Law",
    definition: "The maximum number of terms or years a public official may legally serve in office.",
    simple: "The law limits how long officials may stay in office.",
    example: "The Philippine Constitution sets term limits for many elected officials.",
    related: "Constitution, Public Office, Election"
},
{
    term: "New Public Management",
    category: "Governance & Public Administration",
    definition: "A public administration approach that applies private-sector management practices to improve government efficiency.",
    simple: "Government uses business-style management to improve services.",
    example: "Performance targets and customer-focused services are ideas from New Public Management.",
    related: "Public Administration, Efficiency, Governance"
},
{
    term: "Good Governance",
    category: "Governance & Public Administration",
    definition: "Governance characterized by accountability, transparency, participation, responsiveness, effectiveness, equity, and the rule of law.",
    simple: "Government that is honest, effective, and serves the people.",
    example: "Transparent budgeting is an example of good governance.",
    related: "Accountability, Transparency, Rule of Law"
},
{
    term: "E-Governance",
    category: "Governance & Public Administration",
    definition: "The use of information and communication technology to improve government services and public participation.",
    simple: "Government uses technology to serve people better.",
    example: "Online passport appointments are part of e-governance.",
    related: "Public Administration, Digital Government, Transparency"
},
{
    term: "Merit System",
    category: "Governance & Public Administration",
    definition: "A system where government employees are hired and promoted based on qualifications and performance.",
    simple: "Government jobs are earned through ability and qualifications.",
    example: "Civil service examinations support the merit system.",
    related: "Civil Service, Public Administration, CSC"
},
{
    term: "Red Tape",
    category: "Governance & Public Administration",
    definition: "Excessive rules and procedures that delay government services.",
    simple: "Too much paperwork or unnecessary procedures.",
    example: "Long permit applications are often criticized as red tape.",
    related: "Public Administration, Bureaucracy, Efficiency"
},
{
    term: "Regulatory Agency",
    category: "Governance & Public Administration",
    definition: "A government body responsible for enforcing laws and regulations in a specific sector.",
    simple: "An agency that makes sure rules are followed.",
    example: "Government agencies regulate transportation, health, and communications.",
    related: "Government Agency, Public Administration, Regulation"
},
{
    term: "Public Office",
    category: "Governance & Public Administration",
    definition: "A position in government entrusted with public duties and responsibilities.",
    simple: "A job in government that serves the people.",
    example: "The President holds a public office.",
    related: "Public Service, Accountability, Government"
},
{
    term: "Public Trust",
    category: "Governance & Public Administration",
    definition: "The confidence that citizens place in government institutions and public officials.",
    simple: "People's confidence in government.",
    example: "Transparency helps strengthen public trust.",
    related: "Accountability, Good Governance, Transparency"
},
{
    term: "Fiscal Policy",
    category: "Public Policy & Political Economy",
    definition: "Government policy involving taxation and public spending to influence the economy.",
    simple: "Government uses taxes and spending to manage the economy.",
    example: "Increasing infrastructure spending is a fiscal policy decision.",
    related: "Budget, Taxation, Public Finance"
},
{
    term: "Monetary Policy",
    category: "Public Policy & Political Economy",
    definition: "Actions by a country's central bank to manage money supply and interest rates.",
    simple: "The central bank controls money and interest rates.",
    example: "The Bangko Sentral ng Pilipinas adjusts interest rates to control inflation.",
    related: "Inflation, BSP, Economy"
},
{
    term: "Gross Domestic Product",
    category: "Public Policy & Political Economy",
    definition: "The total value of goods and services produced within a country during a specific period.",
    simple: "The total value of what a country produces.",
    example: "GDP is commonly used to measure economic performance.",
    related: "Economic Growth, Development, Economy"
},
{
    term: "Gross National Income",
    category: "Public Policy & Political Economy",
    definition: "The total income earned by a country's residents, including income from abroad.",
    simple: "The total income earned by citizens.",
    example: "GNI includes remittances from overseas workers.",
    related: "GDP, Economy, Development"
},
{
    term: "Economic Growth",
    category: "Public Policy & Political Economy",
    definition: "An increase in a country's production of goods and services over time.",
    simple: "The economy becomes larger.",
    example: "Rising GDP usually indicates economic growth.",
    related: "GDP, Development, Economy"
},
{
    term: "Poverty Threshold",
    category: "Public Policy & Political Economy",
    definition: "The minimum income required to meet basic food and non-food needs.",
    simple: "The income needed for basic living expenses.",
    example: "Government agencies estimate the poverty threshold each year.",
    related: "Poverty, Development, Economy"
},
{
    term: "National Budget",
    category: "Public Policy & Political Economy",
    definition: "The government's annual financial plan showing expected revenues and expenditures.",
    simple: "The government's yearly spending plan.",
    example: "Congress approves the national budget.",
    related: "Budget, Public Finance, DBM"
},
{
    term: "Research",
    category: "Research Methods",
    definition: "A systematic process of collecting, analyzing, and interpreting information to answer questions or solve problems.",
    simple: "Research is a careful way of finding answers using evidence.",
    example: "Political scientists conduct research to understand voter behavior.",
    related: "Research Design, Methodology, Data"
},
{
    term: "Research Design",
    category: "Research Methods",
    definition: "The overall plan or strategy used to conduct a research study.",
    simple: "It is the blueprint of a research project.",
    example: "A descriptive research design is commonly used in political studies.",
    related: "Methodology, Data Collection, Research"
},
{
    term: "Methodology",
    category: "Research Methods",
    definition: "The overall approach and methods used to conduct research.",
    simple: "It explains how the research is carried out.",
    example: "The methodology describes the research process.",
    related: "Research Design, Methods, Data Collection"
},
{
    term: "Qualitative Research",
    category: "Research Methods",
    definition: "Research that focuses on understanding ideas, experiences, behaviors, and meanings using non-numerical data.",
    simple: "Research using words instead of numbers.",
    example: "Interviews are common in qualitative research.",
    related: "Interview, Case Study, Observation"
},
{
    term: "Quantitative Research",
    category: "Research Methods",
    definition: "Research that uses numerical data and statistical analysis to answer research questions.",
    simple: "Research that uses numbers and statistics.",
    example: "Election surveys often use quantitative research.",
    related: "Statistics, Survey, Data"
},
{
    term: "Mixed Methods Research",
    category: "Research Methods",
    definition: "Research that combines qualitative and quantitative approaches.",
    simple: "Research that uses both words and numbers.",
    example: "A study may combine interviews with surveys.",
    related: "Qualitative Research, Quantitative Research"
},
{
    term: "Variable",
    category: "Research Methods",
    definition: "A characteristic or factor that can change or be measured in a study.",
    simple: "Something that can vary in research.",
    example: "Age is a variable in many political studies.",
    related: "Independent Variable, Dependent Variable"
},
{
    term: "Independent Variable",
    category: "Research Methods",
    definition: "The variable that is believed to influence or affect another variable.",
    simple: "The factor that may cause change.",
    example: "Education level may influence political participation.",
    related: "Dependent Variable, Variable"
},
{
    term: "Dependent Variable",
    category: "Research Methods",
    definition: "The variable that changes because of another variable.",
    simple: "The result being measured.",
    example: "Political participation may be the dependent variable.",
    related: "Independent Variable, Variable"
},
{
    term: "Hypothesis",
    category: "Research Methods",
    definition: "A testable prediction about the relationship between variables.",
    simple: "An educated guess that can be tested.",
    example: "Researchers develop hypotheses before collecting data.",
    related: "Null Hypothesis, Variables"
},
{
    term: "Null Hypothesis",
    category: "Research Methods",
    definition: "A statement that assumes there is no significant relationship between variables.",
    simple: "It assumes nothing is related until evidence proves otherwise.",
    example: "Researchers test whether to reject the null hypothesis.",
    related: "Hypothesis, Statistics"
},
{
    term: "Alternative Hypothesis",
    category: "Research Methods",
    definition: "A statement proposing that a significant relationship exists between variables.",
    simple: "It suggests that variables are related.",
    example: "Rejecting the null hypothesis supports the alternative hypothesis.",
    related: "Hypothesis, Null Hypothesis"
},
{
    term: "Population",
    category: "Research Methods",
    definition: "The entire group being studied.",
    simple: "Everyone or everything the researcher wants to study.",
    example: "All Political Science students may be the population.",
    related: "Sample, Sampling"
},
{
    term: "Sample",
    category: "Research Methods",
    definition: "A smaller group selected from the population for study.",
    simple: "Part of the population chosen for research.",
    example: "One hundred students may serve as the sample.",
    related: "Population, Sampling"
},
{
    term: "Sampling",
    category: "Research Methods",
    definition: "The process of selecting participants from a population.",
    simple: "Choosing who will participate in the study.",
    example: "Random sampling helps reduce bias.",
    related: "Sample, Population"
},
{
    term: "Random Sampling",
    category: "Research Methods",
    definition: "A sampling method where every member of the population has an equal chance of being selected.",
    simple: "Everyone has an equal chance of being chosen.",
    example: "Lottery methods are examples of random sampling.",
    related: "Sampling, Sample"
},
{
    term: "Survey",
    category: "Research Methods",
    definition: "A method of collecting information by asking people a series of questions.",
    simple: "People answer questions to provide data.",
    example: "Election preference surveys are common in Political Science.",
    related: "Questionnaire, Sampling"
},
{
    term: "Questionnaire",
    category: "Research Methods",
    definition: "A written set of questions used to collect research data.",
    simple: "A form containing research questions.",
    example: "Researchers distribute questionnaires to respondents.",
    related: "Survey, Data Collection"
},
{
    term: "Interview",
    category: "Research Methods",
    definition: "A data collection method involving direct questioning of participants.",
    simple: "Researchers ask people questions directly.",
    example: "Political leaders may be interviewed during research.",
    related: "Qualitative Research, Observation"
},
{
    term: "Observation",
    category: "Research Methods",
    definition: "A method of collecting data by watching behaviors or events.",
    simple: "Researchers carefully watch what happens.",
    example: "Researchers observe public hearings for their study.",
    related: "Interview, Case Study"
},
{
    term: "Case Study",
    category: "Research Methods",
    definition: "An in-depth examination of a person, event, organization, or situation.",
    simple: "A detailed study of one specific case.",
    example: "A researcher may conduct a case study of a local government.",
    related: "Qualitative Research, Observation"
},
{
    term: "Content Analysis",
    category: "Research Methods",
    definition: "A method of analyzing documents, speeches, news, or media to identify patterns and themes.",
    simple: "Studying written or spoken materials for important ideas.",
    example: "Political speeches may be analyzed using content analysis.",
    related: "Qualitative Research, Political Communication"
},
{
    term: "Reliability",
    category: "Research Methods",
    definition: "The consistency of a research instrument or measurement.",
    simple: "Getting similar results when repeated.",
    example: "Reliable questionnaires produce consistent responses.",
    related: "Validity, Measurement"
},
{
    term: "Validity",
    category: "Research Methods",
    definition: "The extent to which a research instrument measures what it is intended to measure.",
    simple: "Making sure the research measures the correct thing.",
    example: "A valid survey accurately measures political participation.",
    related: "Reliability, Measurement"
},
{
    term: "Correlation",
    category: "Research Methods",
    definition: "A statistical relationship between two variables.",
    simple: "Two variables are related in some way.",
    example: "Researchers found a positive correlation between education and voting.",
    related: "Variables, Statistics"
},
{
    term: "Regression Analysis",
    category: "Research Methods",
    definition: "A statistical method used to examine how one or more variables affect another variable.",
    simple: "A way to predict or explain relationships between variables.",
    example: "Regression analysis can predict voter turnout.",
    related: "Correlation, Statistics"
},
{
    term: "Chi-Square Test",
    category: "Research Methods",
    definition: "A statistical test used to determine whether two categorical variables are significantly related.",
    simple: "It checks if two categories are related.",
    example: "Gender and voting preference can be tested using Chi-Square.",
    related: "Statistics, Hypothesis"
},
{
    term: "Likert Scale",
    category: "Research Methods",
    definition: "A rating scale used to measure attitudes or opinions.",
    simple: "A scale ranging from strongly disagree to strongly agree.",
    example: "Many surveys use a five-point Likert Scale.",
    related: "Survey, Questionnaire"
},
{
    term: "Primary Source",
    category: "Research Methods",
    definition: "Original information collected directly by the researcher or from firsthand evidence.",
    simple: "Original information.",
    example: "Interviews are primary sources.",
    related: "Secondary Source, Data"
},
{
    term: "Secondary Source",
    category: "Research Methods",
    definition: "Information obtained from books, articles, reports, or previous research.",
    simple: "Information created by someone else.",
    example: "Political Science textbooks are secondary sources.",
    related: "Primary Source, Literature Review"
},
{
    term: "Barangay",
    category: "Philippine Government",
    definition: "The smallest local government unit in the Philippines.",
    simple: "It is the smallest unit of government in the country.",
    example: "A barangay handles basic community services and local concerns.",
    related: "Local Government, Punong Barangay, Sangguniang Barangay"
},
{
    term: "Sangguniang Barangay",
    category: "Philippine Government",
    definition: "The legislative council of a barangay.",
    simple: "It is the council that helps make barangay rules.",
    example: "The Sangguniang Barangay may pass barangay ordinances.",
    related: "Barangay, Barangay Kagawad, Punong Barangay"
},
{
    term: "Barangay Kagawad",
    category: "Philippine Government",
    definition: "An elected member of the Sangguniang Barangay.",
    simple: "A barangay council member.",
    example: "Barangay kagawads help create local ordinances and support barangay programs.",
    related: "Sangguniang Barangay, Barangay, Local Government"
},
{
    term: "Barangay Secretary",
    category: "Philippine Government",
    definition: "A barangay official responsible for records, documents, and administrative work.",
    simple: "The person who handles barangay records.",
    example: "The Barangay Secretary prepares meeting records and certificates.",
    related: "Barangay, Public Administration, Local Government"
},
{
    term: "Barangay Treasurer",
    category: "Philippine Government",
    definition: "A barangay official responsible for managing barangay funds and financial records.",
    simple: "The person who helps manage barangay money.",
    example: "The Barangay Treasurer keeps financial records of barangay funds.",
    related: "Barangay, Public Finance, Accountability"
},
{
    term: "SK Chairperson",
    category: "Philippine Government",
    definition: "The elected head of the Sangguniang Kabataan in a barangay.",
    simple: "The leader of the barangay youth council.",
    example: "The SK Chairperson leads youth programs in the barangay.",
    related: "Sangguniang Kabataan, Youth Participation, Barangay"
},
{
    term: "Liga ng mga Barangay",
    category: "Philippine Government",
    definition: "An organization composed of barangays that represents barangay interests in local governance.",
    simple: "It is the association of barangays.",
    example: "The Liga ng mga Barangay gives barangays representation in local government.",
    related: "Barangay, Local Government, Punong Barangay"
},
{
    term: "Mayor",
    category: "Philippine Government",
    definition: "The elected chief executive of a city or municipality.",
    simple: "The leader of a city or municipality.",
    example: "A mayor implements local programs and ordinances.",
    related: "Local Government, Vice Mayor, City"
},
{
    term: "Vice Mayor",
    category: "Philippine Government",
    definition: "The elected official who usually presides over the city or municipal council.",
    simple: "The second-highest official in a city or municipality.",
    example: "The Vice Mayor presides over sessions of the Sangguniang Panlungsod or Sangguniang Bayan.",
    related: "Mayor, Local Government, Sangguniang Bayan"
},
{
    term: "Governor",
    category: "Philippine Government",
    definition: "The elected chief executive of a province.",
    simple: "The leader of a province.",
    example: "A governor manages provincial programs and services.",
    related: "Province, Vice Governor, Local Government"
},
{
    term: "Vice Governor",
    category: "Philippine Government",
    definition: "The elected official who usually presides over the provincial board.",
    simple: "The second-highest official in a province.",
    example: "The Vice Governor leads sessions of the Sangguniang Panlalawigan.",
    related: "Governor, Province, Sangguniang Panlalawigan"
},
{
    term: "House of Representatives",
    category: "Philippine Government",
    definition: "The lower chamber of the Philippine Congress composed of district and party-list representatives.",
    simple: "One of the two houses of Congress.",
    example: "The House of Representatives helps create national laws.",
    related: "Congress, Legislature, District Representative"
},
{
    term: "Senate",
    category: "Philippine Government",
    definition: "The upper chamber of the Philippine Congress composed of elected senators.",
    simple: "One of the two houses of Congress.",
    example: "The Senate reviews bills and participates in lawmaking.",
    related: "Congress, Legislature, Senator"
},
{
    term: "Senator",
    category: "Philippine Government",
    definition: "An elected member of the Philippine Senate.",
    simple: "A national lawmaker in the Senate.",
    example: "Senators propose, debate, and vote on national laws.",
    related: "Senate, Congress, Lawmaking"
},
{
    term: "District Representative",
    category: "Philippine Government",
    definition: "A member of the House of Representatives elected from a legislative district.",
    simple: "A lawmaker representing a district.",
    example: "A district representative speaks for the concerns of a specific area.",
    related: "House of Representatives, Congress, Representation"
},
{
    term: "Party-list Representative",
    category: "Philippine Government",
    definition: "A member of the House of Representatives elected through the party-list system.",
    simple: "A lawmaker representing a sector or party-list group.",
    example: "Party-list representatives may represent labor, youth, or marginalized sectors.",
    related: "Party-list System, House of Representatives, Representation"
},
{
    term: "Executive Department",
    category: "Philippine Government",
    definition: "A major government department under the executive branch responsible for a specific area of public service.",
    simple: "A main office under the President.",
    example: "The Department of Education is an executive department.",
    related: "Executive, Cabinet, President"
},
{
    term: "Office of the President",
    category: "Philippine Government",
    definition: "The office that supports the President in exercising executive powers and functions.",
    simple: "The main office of the President.",
    example: "The Office of the President helps manage executive actions and programs.",
    related: "President, Executive, Cabinet"
},
{
    term: "Office of the Vice President",
    category: "Philippine Government",
    definition: "The office that supports the Vice President in performing official duties and programs.",
    simple: "The main office of the Vice President.",
    example: "The Office of the Vice President may implement public assistance programs.",
    related: "Vice President, Executive, Public Service"
},
{
    term: "Commission on Human Rights",
    category: "Philippine Government",
    definition: "An independent body that investigates human rights violations and promotes human rights protection.",
    simple: "CHR helps protect human rights.",
    example: "The Commission on Human Rights may investigate reports of abuse.",
    related: "Human Rights, Civil Rights, Accountability"
},
{
    term: "State of National Emergency",
    category: "Constitutional Law",
    definition: "A condition declared when serious threats or crises require urgent government action.",
    simple: "Government responds to a serious national crisis.",
    example: "A national emergency may involve threats to security, public order, or essential services.",
    related: "Emergency Powers, President, Public Safety"
},
{
    term: "State of Calamity",
    category: "Philippine Government",
    definition: "A declaration made when an area is seriously affected by disaster or emergency conditions.",
    simple: "Government declares an area affected by disaster.",
    example: "A province may be placed under a state of calamity after a strong typhoon.",
    related: "Disaster Response, Local Government, Public Service"
},
{
    term: "Constitutionalism",
    category: "Constitutional Law",
    definition: "The principle that government power must be limited and guided by a constitution.",
    simple: "Government must follow constitutional limits.",
    example: "Constitutionalism prevents abuse of power by public officials.",
    related: "Constitution, Rule of Law, Limited Government"
},
{
    term: "Judicial Independence",
    category: "Constitutional Law",
    definition: "The principle that courts and judges should decide cases without improper influence from other branches or outside forces.",
    simple: "Judges should decide fairly without pressure.",
    example: "Judicial independence helps protect the rule of law.",
    related: "Judiciary, Rule of Law, Separation of Powers"
},
{
    term: "Constitutional Revision",
    category: "Constitutional Law",
    definition: "A broad change that alters the basic structure or major provisions of the Constitution.",
    simple: "It changes major parts of the Constitution.",
    example: "Changing the form of government may require constitutional revision.",
    related: "Constitution, Constitutional Amendment, Plebiscite"
},
{
    term: "Popular Sovereignty",
    category: "Political Science",
    definition: "The principle that political authority ultimately comes from the people.",
    simple: "Power comes from the people.",
    example: "Elections are one way people exercise popular sovereignty.",
    related: "Sovereignty, Democracy, Consent of the Governed"
},
{
    term: "Limited Government",
    category: "Political Science",
    definition: "The idea that government power should be restricted by law and constitutional rules.",
    simple: "Government cannot do whatever it wants.",
    example: "The Bill of Rights limits what government may do to citizens.",
    related: "Constitutionalism, Rule of Law, Bill of Rights"
},
{
    term: "Emergency Powers",
    category: "Constitutional Law",
    definition: "Special powers granted to government during serious crises, subject to constitutional limits.",
    simple: "Extra powers used during emergencies.",
    example: "Emergency powers may be used during war, rebellion, or national crisis.",
    related: "State of National Emergency, Martial Law, President"
},
{
    term: "Commander-in-Chief Powers",
    category: "Constitutional Law",
    definition: "The constitutional power of the President to command the armed forces.",
    simple: "The President leads the military as commander-in-chief.",
    example: "The President may call out the armed forces when necessary under the Constitution.",
    related: "President, Martial Law, National Security"
},
{
    term: "Veto Power",
    category: "Philippine Government",
    definition: "The power of the President to reject a bill passed by Congress.",
    simple: "The President can reject a proposed law.",
    example: "Congress may override a presidential veto if it has enough votes.",
    related: "President, Bill, Congress"
},
{
    term: "Quorum",
    category: "Philippine Government",
    definition: "The minimum number of members required for a body to officially conduct business.",
    simple: "Enough members must be present to make decisions.",
    example: "A legislative body needs a quorum before voting on bills.",
    related: "Legislature, Congress, Lawmaking"
},
{
    term: "Session",
    category: "Philippine Government",
    definition: "A formal meeting of a legislative or government body to conduct official business.",
    simple: "An official meeting for government work.",
    example: "Congress holds sessions to debate and pass laws.",
    related: "Congress, Legislature, Quorum"
},
{
    term: "Committee Hearing",
    category: "Philippine Government",
    definition: "A formal meeting where a legislative committee studies bills, issues, or investigations.",
    simple: "Lawmakers study an issue or bill in a smaller group.",
    example: "A Senate committee hearing may invite resource persons to discuss a proposed law.",
    related: "Congress, Lawmaking, Bill"
},
{
    term: "Public Hearing",
    category: "Governance & Public Administration",
    definition: "A formal meeting where citizens, officials, or stakeholders may express views on a public issue.",
    simple: "People are allowed to give opinions on government matters.",
    example: "A public hearing may be held before approving a local ordinance.",
    related: "Participation, Governance, Public Policy"
},
{
    term: "Ordinance Power",
    category: "Philippine Government",
    definition: "The authority of local legislative bodies to pass local laws called ordinances.",
    simple: "Local councils can make local rules.",
    example: "A city council may use ordinance power to pass traffic rules.",
    related: "Ordinance, Local Government, Sangguniang Panlungsod"
},
{
    term: "Department of Finance",
    category: "Philippine Government",
    definition: "The executive department responsible for managing government revenues, fiscal policy, and financial resources.",
    simple: "DOF manages government money and tax policy.",
    example: "The Department of Finance helps design taxation and revenue policies.",
    related: "Fiscal Policy, Taxation, Public Finance"
},
{
    term: "Department of Foreign Affairs",
    category: "Philippine Government",
    definition: "The executive department responsible for managing the country’s foreign relations and diplomatic affairs.",
    simple: "DFA handles relations with other countries.",
    example: "The DFA assists Filipinos abroad and manages diplomatic relations.",
    related: "Foreign Policy, Diplomacy, International Relations"
},
{
    term: "Department of Education",
    category: "Philippine Government",
    definition: "The executive department responsible for basic education in the Philippines.",
    simple: "DepEd manages public basic education.",
    example: "DepEd oversees elementary and secondary education programs.",
    related: "Executive Department, Public Service, Education Policy"
},
{
    term: "Commission on Higher Education",
    category: "Philippine Government",
    definition: "The government agency responsible for regulating and developing higher education in the Philippines.",
    simple: "CHED supervises colleges and universities.",
    example: "CHED issues policies for higher education institutions.",
    related: "Education Policy, Public Administration, Government Agency"
},
{
    term: "Technical Education and Skills Development Authority",
    category: "Philippine Government",
    definition: "The government agency responsible for technical-vocational education and skills training.",
    simple: "TESDA provides skills and vocational training.",
    example: "TESDA offers training programs for employment and livelihood.",
    related: "Education Policy, Public Service, Workforce Development"
},
{
    term: "Armed Forces of the Philippines",
    category: "Philippine Government",
    definition: "The military organization responsible for defending the Philippines and protecting national security.",
    simple: "AFP is the military of the Philippines.",
    example: "The AFP helps protect the country from external and internal security threats.",
    related: "National Security, Civilian Supremacy, Commander-in-Chief Powers"
},
{
    term: "Philippine National Police",
    category: "Philippine Government",
    definition: "The national police force responsible for law enforcement and public safety.",
    simple: "PNP helps maintain peace and order.",
    example: "The PNP enforces laws and responds to public safety concerns.",
    related: "Public Safety, Law Enforcement, DILG"
},
{
    term: "Government-Owned and Controlled Corporation",
    category: "Philippine Government",
    definition: "A corporation owned or controlled by the government that performs public or economic functions.",
    simple: "A company owned or controlled by the government.",
    example: "Some GOCCs provide public utilities, finance, or development services.",
    related: "Public Enterprise, Government Agency, Public Finance"
},
{
    term: "Government Financial Institution",
    category: "Philippine Government",
    definition: "A government-owned financial institution that provides banking, credit, or financial services.",
    simple: "A government financial agency or bank.",
    example: "GFIs may support development, housing, or public financing programs.",
    related: "Public Finance, GOCC, Development"
},
{
    term: "Local Chief Executive",
    category: "Philippine Government",
    definition: "The elected head of a local government unit, such as a governor or mayor.",
    simple: "The main leader of a local government.",
    example: "Governors and mayors are local chief executives.",
    related: "Governor, Mayor, Local Government"
},
{
    term: "Provincial Board",
    category: "Philippine Government",
    definition: "The legislative body of a province, also called the Sangguniang Panlalawigan.",
    simple: "The lawmaking body of a province.",
    example: "The Provincial Board passes ordinances for the province.",
    related: "Sangguniang Panlalawigan, Province, Local Government"
},
{
    term: "City Council",
    category: "Philippine Government",
    definition: "The legislative body of a city, also called the Sangguniang Panlungsod.",
    simple: "The lawmaking body of a city.",
    example: "The City Council may pass traffic, zoning, or public safety ordinances.",
    related: "Sangguniang Panlungsod, City, Ordinance"
},
{
    term: "Municipal Council",
    category: "Philippine Government",
    definition: "The legislative body of a municipality, also called the Sangguniang Bayan.",
    simple: "The lawmaking body of a municipality.",
    example: "The Municipal Council passes ordinances for the municipality.",
    related: "Sangguniang Bayan, Municipality, Local Government"
},
{
    term: "Local Autonomy",
    category: "Philippine Government",
    definition: "The constitutional principle that local government units should have meaningful power to manage local affairs.",
    simple: "Local governments have authority over local matters.",
    example: "Local autonomy allows cities and municipalities to address community needs.",
    related: "Local Government, Decentralization, Devolution"
},
{
    term: "National Tax Allocation",
    category: "Public Policy & Political Economy",
    definition: "The share of national taxes automatically given to local government units.",
    simple: "Money from national taxes given to LGUs.",
    example: "Local governments use the National Tax Allocation to fund services and projects.",
    related: "Local Government, Public Finance, Budget"
},
{
    term: "Political Knowledge",
    category: "Political Behavior & Research",
    definition: "A person's factual understanding of political institutions, processes, and issues.",
    simple: "It means knowing basic facts about politics and government.",
    example: "Knowing the functions of Congress is part of political knowledge.",
    related: "Political Awareness, Citizenship, Government"
},
{
    term: "Civic Engagement",
    category: "Political Behavior & Research",
    definition: "Participation in activities that improve community life and public decision-making.",
    simple: "It means being involved in society and community issues.",
    example: "Joining a community clean-up or public forum is civic engagement.",
    related: "Citizenship, Political Participation, Civil Society"
},
{
    term: "Civic Duty",
    category: "Political Behavior & Research",
    definition: "The responsibility of citizens to participate in public life and support democratic society.",
    simple: "It means doing your responsibility as a citizen.",
    example: "Voting is often considered a civic duty.",
    related: "Citizenship, Suffrage, Democracy"
},
{
    term: "Political Mobilization",
    category: "Political Behavior & Research",
    definition: "The process of encouraging people to participate in political action.",
    simple: "It means getting people involved in politics.",
    example: "Campaigns use social media to mobilize young voters.",
    related: "Political Participation, Campaign, Civic Engagement"
},
{
    term: "Political Recruitment",
    category: "Political Behavior & Research",
    definition: "The process through which individuals are selected or encouraged to take political roles.",
    simple: "It means bringing people into politics or leadership.",
    example: "Political parties recruit candidates for elections.",
    related: "Political Party, Candidate, Leadership"
},
{
    term: "Partisanship",
    category: "Political Behavior & Research",
    definition: "Strong support for a particular political party, group, or side.",
    simple: "It means being loyal to a political side.",
    example: "Partisanship can influence how voters judge candidates.",
    related: "Political Party, Party Identification, Voting Behavior"
},
{
    term: "Party Identification",
    category: "Political Behavior & Research",
    definition: "A person's psychological attachment or loyalty to a political party.",
    simple: "It means feeling connected to a political party.",
    example: "Party identification may affect voting choices.",
    related: "Political Party, Partisanship, Election"
},
{
    term: "Political Attitude",
    category: "Political Behavior & Research",
    definition: "A person's opinion or feeling toward political issues, leaders, or institutions.",
    simple: "It means how someone feels about politics.",
    example: "A student may have a positive attitude toward voting.",
    related: "Public Opinion, Political Culture, Political Socialization"
},
{
    term: "Social Movement",
    category: "Political Behavior & Research",
    definition: "An organized effort by people to promote or resist social or political change.",
    simple: "People work together to push for change.",
    example: "Environmental and human rights movements are social movements.",
    related: "Civil Society, Advocacy, Protest"
},
{
    term: "Advocacy",
    category: "Political Behavior & Research",
    definition: "The act of supporting or promoting a cause, policy, or public issue.",
    simple: "It means speaking or acting for a cause.",
    example: "Student leaders may advocate for better campus policies.",
    related: "Civil Society, Interest Group, Public Policy"
},
{
    term: "Protest",
    category: "Political Behavior & Research",
    definition: "A public action expressing disagreement, demand, or opposition to an issue or decision.",
    simple: "People publicly show disagreement or demand change.",
    example: "Citizens may join a protest against corruption.",
    related: "Political Participation, Social Movement, Civil Society"
},
{
    term: "Political Social Media Use",
    category: "Political Behavior & Research",
    definition: "The use of social media platforms to share, discuss, or participate in political issues.",
    simple: "Using social media for politics.",
    example: "Young voters may use social media to discuss election issues.",
    related: "Mass Media, Political Communication, Public Opinion"
},
{
    term: "Public Sphere",
    category: "Political Behavior & Research",
    definition: "A space where citizens discuss public issues and form opinions about society and government.",
    simple: "It is where people talk about public matters.",
    example: "Forums, media, and online discussions can be part of the public sphere.",
    related: "Public Opinion, Political Communication, Civil Society"
},
{
    term: "Deliberation",
    category: "Political Behavior & Research",
    definition: "Careful discussion and reasoning before making a political or public decision.",
    simple: "It means discussing issues before deciding.",
    example: "Public consultations encourage deliberation among citizens.",
    related: "Democracy, Public Consultation, Participation"
},
{
    term: "Political Psychology",
    category: "Political Behavior & Research",
    definition: "The study of how thoughts, emotions, identity, and personality affect political behavior.",
    simple: "It studies how people think and feel about politics.",
    example: "Political psychology can explain why voters support certain leaders.",
    related: "Voting Behavior, Political Attitude, Public Opinion"
},
{
    term: "Voter Turnout",
    category: "Political Behavior & Research",
    definition: "The percentage or number of eligible voters who actually vote in an election.",
    simple: "It shows how many people voted.",
    example: "High voter turnout can show strong political participation.",
    related: "Election, Suffrage, Political Participation"
},
{
    term: "Political Consumerism",
    category: "Political Behavior & Research",
    definition: "The use of buying or boycotting products to express political or social beliefs.",
    simple: "People use purchases to support or oppose causes.",
    example: "Consumers may boycott a company because of labor or environmental issues.",
    related: "Advocacy, Civil Society, Political Participation"
},
{
    term: "Civic Education",
    category: "Political Behavior & Research",
    definition: "Education that teaches citizens about rights, duties, government, and democratic participation.",
    simple: "It teaches people how to be responsible citizens.",
    example: "Learning about the Constitution is part of civic education.",
    related: "Citizenship, Political Awareness, Democracy"
},
{
    term: "Hybrid Regime",
    category: "Comparative Politics",
    definition: "A political system that combines democratic features with authoritarian practices.",
    simple: "It looks partly democratic but also has unfair or authoritarian features.",
    example: "A country may hold elections but limit press freedom and opposition rights.",
    related: "Democracy, Authoritarianism, Political System"
},
{
    term: "Authoritarian Regime",
    category: "Comparative Politics",
    definition: "A political system where power is concentrated in a leader or ruling group with limited political competition.",
    simple: "A government where people have limited political freedom.",
    example: "Authoritarian regimes often restrict opposition parties and media.",
    related: "Authoritarianism, Dictatorship, Political System"
},
{
    term: "Failed State",
    category: "Comparative Politics",
    definition: "A state that can no longer effectively provide basic order, security, and public services.",
    simple: "A government becomes too weak to function properly.",
    example: "Failed states often struggle with violence, weak institutions, and poor public services.",
    related: "State, Fragile State, Political Instability"
},
{
    term: "Fragile State",
    category: "Comparative Politics",
    definition: "A state with weak institutions and limited capacity to manage conflict, provide services, or maintain authority.",
    simple: "A state that is weak and at risk of serious problems.",
    example: "Fragile states may face corruption, poverty, and internal conflict.",
    related: "Failed State, State Capacity, Political Instability"
},
{
    term: "State Capacity",
    category: "Comparative Politics",
    definition: "The ability of a state to implement laws, provide services, collect revenue, and maintain order.",
    simple: "How well a government can do its job.",
    example: "A state with high capacity can deliver public services effectively.",
    related: "State, Governance, Public Administration"
},
{
    term: "Majoritarian System",
    category: "Comparative Politics",
    definition: "An electoral or political system that tends to favor majority rule and clear winners.",
    simple: "The majority usually gets strong control.",
    example: "Majoritarian systems often produce single-party governments.",
    related: "Majority Vote, Electoral System, Democracy"
},
{
    term: "Consensus Democracy",
    category: "Comparative Politics",
    definition: "A democratic model that emphasizes power-sharing, compromise, and broad participation.",
    simple: "Government decisions are made through agreement and sharing power.",
    example: "Consensus democracies often include coalition governments and proportional representation.",
    related: "Democracy, Coalition Government, Proportional Representation"
},
{
    term: "Political Culture Comparison",
    category: "Comparative Politics",
    definition: "The study of how political values, beliefs, and attitudes differ across countries or societies.",
    simple: "It compares how people in different places view politics.",
    example: "Researchers may compare trust in government between two countries.",
    related: "Political Culture, Comparative Politics, Public Opinion"
},
{
    term: "Policy Cycle",
    category: "Public Policy & Political Economy",
    definition: "The series of stages through which public policies are developed, implemented, and evaluated.",
    simple: "The step-by-step process of making government policies.",
    example: "A new environmental law goes through agenda setting, formulation, implementation, and evaluation.",
    related: "Public Policy, Policy Implementation, Policy Evaluation"
},
{
    term: "Agenda Setting",
    category: "Public Policy & Political Economy",
    definition: "The process of identifying which public issues receive government attention.",
    simple: "Choosing which problems the government will address.",
    example: "Increasing inflation may become part of the government's policy agenda.",
    related: "Public Policy, Policy Cycle, Governance"
},
{
    term: "Policy Monitoring",
    category: "Public Policy & Political Economy",
    definition: "The continuous assessment of a policy while it is being implemented.",
    simple: "Checking whether a policy is working properly.",
    example: "Government agencies monitor the implementation of disaster programs.",
    related: "Policy Implementation, Policy Evaluation, Governance"
},
{
    term: "Evidence-Based Policy",
    category: "Public Policy & Political Economy",
    definition: "Public policy developed using reliable research and empirical evidence.",
    simple: "Policies based on research instead of opinion.",
    example: "Health policies may be based on scientific studies.",
    related: "Research Methods, Public Policy, Data Analysis"
},
{
    term: "Stakeholder",
    category: "Public Policy & Political Economy",
    definition: "Any individual or group affected by or interested in a government policy.",
    simple: "People affected by a government decision.",
    example: "Farmers are stakeholders in agricultural policy.",
    related: "Public Policy, Participation, Governance"
},
{
    term: "Public Consultation",
    category: "Public Policy & Political Economy",
    definition: "The process of seeking opinions from citizens before making public decisions.",
    simple: "Government asks the public for ideas or opinions.",
    example: "Local governments conduct public consultations before major projects.",
    related: "Participation, Governance, Public Policy"
},
{
    term: "Regulatory Policy",
    category: "Public Policy & Political Economy",
    definition: "Government policies that regulate the behavior of individuals, businesses, or organizations.",
    simple: "Rules made by the government to control activities.",
    example: "Environmental regulations are examples of regulatory policy.",
    related: "Public Policy, Law, Governance"
},
{
    term: "National Debt",
    category: "Public Policy & Political Economy",
    definition: "The total amount of money owed by the government.",
    simple: "Money borrowed by the government.",
    example: "Governments issue bonds to finance national debt.",
    related: "Budget, Fiscal Policy, Public Finance"
},
{
    term: "Inflation",
    category: "Public Policy & Political Economy",
    definition: "A sustained increase in the general level of prices over time.",
    simple: "Prices of goods and services increase.",
    example: "High inflation reduces the purchasing power of consumers.",
    related: "Economy, Monetary Policy, Fiscal Policy"
},
{
    term: "Equality",
    category: "Human Rights & Civil Liberties",
    definition: "The principle that people should be treated with equal respect and protection under the law.",
    simple: "People should be treated fairly and equally.",
    example: "Equal access to public service reflects equality.",
    related: "Equal Protection, Civil Rights, Justice"
},
{
    term: "Non-Discrimination",
    category: "Human Rights & Civil Liberties",
    definition: "The principle that people should not be unfairly treated based on identity, status, belief, or background.",
    simple: "People should not be treated unfairly because of who they are.",
    example: "Laws against discrimination protect equal rights.",
    related: "Equality, Civil Rights, Human Rights"
},
{
    term: "Right to Liberty",
    category: "Human Rights & Civil Liberties",
    definition: "The right to be free from unlawful detention or restraint.",
    simple: "People should not be unlawfully detained.",
    example: "Due process protects a person’s right to liberty.",
    related: "Liberty, Due Process, Habeas Corpus"
},
{
    term: "Right to Security",
    category: "Human Rights & Civil Liberties",
    definition: "The right to be protected from threats, violence, or unlawful harm.",
    simple: "People have the right to safety.",
    example: "The writ of amparo helps protect the right to security.",
    related: "Writ of Amparo, Human Rights, Right to Life"
},
{
    term: "Freedom from Torture",
    category: "Human Rights & Civil Liberties",
    definition: "The right not to be subjected to cruel, inhuman, or degrading treatment or punishment.",
    simple: "No person should be tortured or abused.",
    example: "Human rights law prohibits torture by state authorities.",
    related: "Human Dignity, Human Rights, Due Process"
},
{
    term: "Rights of the Accused",
    category: "Human Rights & Civil Liberties",
    definition: "Legal protections given to a person charged with an offense.",
    simple: "Accused persons have protections under the law.",
    example: "The accused has the right to due process and presumption of innocence.",
    related: "Presumption of Innocence, Due Process, Bill of Rights"
},
{
    term: "Freedom from Arbitrary Detention",
    category: "Human Rights & Civil Liberties",
    definition: "The right not to be detained without lawful reason or proper legal process.",
    simple: "People cannot be jailed without legal basis.",
    example: "Habeas corpus protects against arbitrary detention.",
    related: "Habeas Corpus, Due Process, Right to Liberty"
},
{
    term: "Social Justice",
    category: "Human Rights & Civil Liberties",
    definition: "The principle of reducing inequality and ensuring fair access to opportunities and resources.",
    simple: "Society should be fair, especially to disadvantaged people.",
    example: "Programs for poor communities promote social justice.",
    related: "Equality, Public Policy, Human Rights"
},
{
    term: "Gender Equality",
    category: "Human Rights & Civil Liberties",
    definition: "The principle that people should have equal rights and opportunities regardless of gender.",
    simple: "Gender should not limit a person’s rights or opportunities.",
    example: "Equal access to education and work supports gender equality.",
    related: "Feminism, Equality, Non-Discrimination"
},
{
    term: "Indigenous Peoples' Rights",
    category: "Human Rights & Civil Liberties",
    definition: "Rights that protect Indigenous communities, cultures, lands, and self-determination.",
    simple: "Indigenous peoples have rights to their culture and communities.",
    example: "Ancestral domain rights protect Indigenous communities.",
    related: "Minority Rights, Human Rights, Social Justice"
},
{
    term: "Accused",
    category: "Law & Jurisprudence",
    definition: "A person formally charged with a criminal offense.",
    simple: "A person charged with a crime.",
    example: "The accused has the right to be presumed innocent.",
    related: "Presumption of Innocence, Criminal Case, Due Process"
},
{
    term: "Complaint",
    category: "Law & Jurisprudence",
    definition: "A formal statement that begins a legal action or reports a legal violation.",
    simple: "A formal legal complaint.",
    example: "A complaint may be filed before a court or government office.",
    related: "Case, Plaintiff, Due Process"
},
{
    term: "Petition",
    category: "Law & Jurisprudence",
    definition: "A formal written request asking a court or government body to take action.",
    simple: "A written legal request.",
    example: "A petition may ask the court to protect a constitutional right.",
    related: "Court, Remedy, Judicial Review"
},
{
    term: "Affidavit",
    category: "Law & Jurisprudence",
    definition: "A written statement of facts sworn before an authorized officer.",
    simple: "A sworn written statement.",
    example: "A witness may submit an affidavit in a case.",
    related: "Evidence, Witness, Court"
},
{
    term: "Subpoena",
    category: "Law & Jurisprudence",
    definition: "A legal order requiring a person to appear in court or produce documents.",
    simple: "A court order to appear or submit evidence.",
    example: "A witness may receive a subpoena to testify.",
    related: "Court, Witness, Evidence"
},
{
    term: "Evidence",
    category: "Law & Jurisprudence",
    definition: "Information, documents, objects, or testimony used to prove facts in a case.",
    simple: "Proof used in court.",
    example: "Documents and witness testimony can be evidence.",
    related: "Witness, Trial, Court"
},
{
    term: "Testimony",
    category: "Law & Jurisprudence",
    definition: "A statement given by a witness under oath.",
    simple: "What a witness says in court.",
    example: "The witness gave testimony during the trial.",
    related: "Witness, Evidence, Trial"
},
{
    term: "Witness",
    category: "Law & Jurisprudence",
    definition: "A person who gives information or testimony about facts relevant to a case.",
    simple: "Someone who tells the court what they know.",
    example: "A witness may describe what happened during an incident.",
    related: "Testimony, Evidence, Court"
},
{
    term: "Trial",
    category: "Law & Jurisprudence",
    definition: "A court proceeding where evidence is presented and a case is decided.",
    simple: "A formal court hearing to decide a case.",
    example: "During trial, both sides present evidence and arguments.",
    related: "Court, Evidence, Judgment"
},
{
    term: "Judgment",
    category: "Law & Jurisprudence",
    definition: "The official decision of a court in a case.",
    simple: "The court's final decision.",
    example: "The court issued a judgment after reviewing the evidence.",
    related: "Court, Decision, Appeal"
},
{
    term: "Acquittal",
    category: "Law & Jurisprudence",
    definition: "A judgment that an accused person is not guilty of the offense charged.",
    simple: "The accused is found not guilty.",
    example: "An acquittal means the prosecution failed to prove guilt beyond reasonable doubt.",
    related: "Presumption of Innocence, Criminal Case, Judgment"
},
{
    term: "Conviction",
    category: "Law & Jurisprudence",
    definition: "A judgment that an accused person is guilty of a criminal offense.",
    simple: "The accused is found guilty.",
    example: "A conviction may result in penalties under the law.",
    related: "Criminal Case, Judgment, Penalty"
},
{
    term: "Penalty",
    category: "Law & Jurisprudence",
    definition: "A punishment imposed for violating the law.",
    simple: "Punishment for breaking the law.",
    example: "A penalty may include imprisonment, fine, or other sanctions.",
    related: "Conviction, Criminal Law, Justice"
},
{
    term: "Civil Case",
    category: "Law & Jurisprudence",
    definition: "A legal case involving private rights, obligations, or disputes between parties.",
    simple: "A case about rights, duties, or damages.",
    example: "A dispute over property may become a civil case.",
    related: "Plaintiff, Defendant, Court"
},
{
    term: "Criminal Case",
    category: "Law & Jurisprudence",
    definition: "A legal case where a person is accused of committing a crime.",
    simple: "A case about an alleged crime.",
    example: "The state prosecutes criminal cases against accused persons.",
    related: "Accused, Presumption of Innocence, Penalty"
},
{
    term: "Legal Remedy",
    category: "Law & Jurisprudence",
    definition: "A legal means used to protect a right or correct a wrong.",
    simple: "A legal way to fix a problem.",
    example: "Habeas corpus is a legal remedy against unlawful detention.",
    related: "Habeas Corpus, Writ of Amparo, Due Process"
},
{
    term: "Conceptual Framework",
    category: "Research Methods",
    definition: "A structure that shows the key concepts and relationships being studied.",
    simple: "It shows the main ideas of the research and how they connect.",
    example: "A study on social media and voting may use a conceptual framework to show their relationship.",
    related: "Research Design, Variable, Theoretical Framework"
},
{
    term: "Theoretical Framework",
    category: "Research Methods",
    definition: "The use of theories to guide and explain a research study.",
    simple: "It explains which theory supports the research.",
    example: "Agenda-setting theory may be used as a theoretical framework in media research.",
    related: "Theory, Research Design, Conceptual Framework"
},
{
    term: "Research Problem",
    category: "Research Methods",
    definition: "The main issue or gap that a study seeks to answer or explain.",
    simple: "The problem the research wants to solve.",
    example: "Low youth voter turnout may be a research problem.",
    related: "Research Question, Research Design, Methodology"
},
{
    term: "Research Question",
    category: "Research Methods",
    definition: "A specific question that guides a research study.",
    simple: "The question the study tries to answer.",
    example: "How does social media affect political participation among students?",
    related: "Research Problem, Hypothesis, Research Design"
},
{
    term: "Respondent",
    category: "Research Methods",
    definition: "A person who provides answers or data in a research study.",
    simple: "The person who answers the survey or interview.",
    example: "Students may serve as respondents in a campus political study.",
    related: "Sample, Survey, Interview"
},
{
    term: "Purposive Sampling",
    category: "Research Methods",
    definition: "A sampling method where participants are selected because they meet specific criteria.",
    simple: "Choosing respondents because they fit the study.",
    example: "A researcher may choose student leaders as respondents for a leadership study.",
    related: "Sampling, Sample, Qualitative Research"
},
{
    term: "Stratified Sampling",
    category: "Research Methods",
    definition: "A sampling method where the population is divided into groups before selecting participants.",
    simple: "The population is grouped first before choosing samples.",
    example: "Students may be grouped by year level before sampling.",
    related: "Sampling, Random Sampling, Population"
},
{
    term: "Data Collection",
    category: "Research Methods",
    definition: "The process of gathering information needed for a study.",
    simple: "Collecting the information for research.",
    example: "Surveys, interviews, and observations are forms of data collection.",
    related: "Survey, Interview, Observation"
},
{
    term: "Data Analysis",
    category: "Research Methods",
    definition: "The process of examining and interpreting collected data.",
    simple: "Studying the data to understand the results.",
    example: "Researchers analyze survey results to identify voting patterns.",
    related: "Data Collection, Statistics, Findings"
},
{
    term: "Findings",
    category: "Research Methods",
    definition: "The results or discoveries produced by a research study.",
    simple: "What the research found out.",
    example: "The findings showed that students rely on social media for political news.",
    related: "Data Analysis, Conclusion, Research"
},
{
    term: "Conclusion",
    category: "Research Methods",
    definition: "The final interpretation or summary based on the research findings.",
    simple: "The final answer of the study.",
    example: "The conclusion explains what the findings mean.",
    related: "Findings, Recommendation, Research"
},
{
    term: "Recommendation",
    category: "Research Methods",
    definition: "A suggested action or future direction based on research findings.",
    simple: "What the researcher suggests after the study.",
    example: "A study may recommend stronger civic education programs.",
    related: "Conclusion, Findings, Public Policy"
},
{
    term: "Literature Review",
    category: "Research Methods",
    definition: "A review of existing studies, books, and sources related to the research topic.",
    simple: "A summary of what others have already studied.",
    example: "A literature review helps identify research gaps.",
    related: "Secondary Source, Research Gap, Theoretical Framework"
},
{
    term: "Research Gap",
    category: "Research Methods",
    definition: "An area or question that has not been fully studied yet.",
    simple: "Something missing in previous research.",
    example: "Few studies on student political memes may show a research gap.",
    related: "Literature Review, Research Problem, Research Question"
},
{
    term: "Operational Definition",
    category: "Research Methods",
    definition: "A clear explanation of how a concept will be measured or used in a study.",
    simple: "How a term is defined for the research.",
    example: "Political participation may be operationally defined as voting, attending forums, or signing petitions.",
    related: "Variable, Measurement, Research Design"
},
{
    term: "Measurement",
    category: "Research Methods",
    definition: "The process of assigning values or categories to concepts in research.",
    simple: "Turning ideas into something that can be studied.",
    example: "Political trust may be measured using survey questions.",
    related: "Variable, Reliability, Validity"
},
{
    term: "Descriptive Statistics",
    category: "Research Methods",
    definition: "Statistical tools used to summarize and describe data.",
    simple: "Statistics that describe the data.",
    example: "Mean, percentage, and frequency are descriptive statistics.",
    related: "Statistics, Data Analysis, Quantitative Research"
},
{
    term: "Frequency",
    category: "Research Methods",
    definition: "The number of times a response, event, or value appears in data.",
    simple: "How often something appears.",
    example: "A survey may show the frequency of students who voted.",
    related: "Descriptive Statistics, Percentage, Data Analysis"
},
{
    term: "Percentage",
    category: "Research Methods",
    definition: "A way of expressing a number as a part of one hundred.",
    simple: "A number shown out of 100.",
    example: "Sixty percent of respondents may support a policy.",
    related: "Frequency, Descriptive Statistics, Survey"
},
{
    term: "Mean",
    category: "Research Methods",
    definition: "The average value of a set of numbers.",
    simple: "The average.",
    example: "A researcher may compute the mean score of political awareness responses.",
    related: "Descriptive Statistics, Data Analysis, Quantitative Research"
},
{
    term: "Politics",
    category: "Political Science",
    definition: "The process of making decisions about how power and resources are distributed in society.",
    simple: "It is the activity of governing and making public decisions.",
    example: "Politics influences how laws and policies are created.",
    related: "Government, Power, Governance"
},
{
    term: "Nation",
    category: "Political Science",
    definition: "A group of people who share a common identity, culture, history, or language.",
    simple: "A community of people with a shared identity.",
    example: "The Filipino nation consists of people with a shared history and culture.",
    related: "State, Nationalism, Citizenship"
},
{
    term: "Nation-State",
    category: "Political Science",
    definition: "A state whose population largely shares the same national identity.",
    simple: "A country where most people share the same national identity.",
    example: "Japan is often described as a nation-state.",
    related: "Nation, State, Sovereignty"
},
{
    term: "Political Process",
    category: "Political Science",
    definition: "The activities through which political decisions are made and implemented.",
    simple: "The way political decisions are made.",
    example: "Elections are part of the political process.",
    related: "Politics, Governance, Democracy"
},
{
    term: "Political Leadership",
    category: "Political Science",
    definition: "The ability to influence people and guide government or political organizations.",
    simple: "Leading people in politics.",
    example: "Effective political leadership promotes good governance.",
    related: "Leadership, Authority, Government"
},
{
    term: "Political Legitimacy",
    category: "Political Science",
    definition: "The public acceptance that a government has the rightful authority to govern.",
    simple: "People believe the government has the right to rule.",
    example: "Free elections strengthen political legitimacy.",
    related: "Legitimacy, Authority, Democracy"
},
{
    term: "Political Stability",
    category: "Political Science",
    definition: "The condition where government institutions function effectively without major unrest.",
    simple: "A stable and peaceful political system.",
    example: "Political stability encourages economic development.",
    related: "Government, Governance, Democracy"
},
{
    term: "Political Conflict",
    category: "Political Science",
    definition: "Disagreement between individuals or groups over political goals, values, or power.",
    simple: "Conflicts about politics.",
    example: "Election disputes can create political conflict.",
    related: "Politics, Power, Political Competition"
},
{
    term: "Political Competition",
    category: "Political Science",
    definition: "The contest among individuals or parties to gain political power.",
    simple: "People or parties compete for leadership.",
    example: "Political competition is common during elections.",
    related: "Election, Political Party, Democracy"
},
{
    term: "Political Conflict Resolution",
    category: "Political Science",
    definition: "Methods used to peacefully settle political disagreements.",
    simple: "Solving political disagreements peacefully.",
    example: "Negotiation is a form of political conflict resolution.",
    related: "Negotiation, Diplomacy, Governance"
},
{
    term: "Political Development",
    category: "Political Science",
    definition: "The growth and improvement of political institutions and democratic practices.",
    simple: "How politics improves over time.",
    example: "Strengthening democratic institutions supports political development.",
    related: "Democracy, Governance, Political Stability"
},
{
    term: "Political Identity",
    category: "Political Science",
    definition: "A person's sense of belonging to a political group, ideology, or movement.",
    simple: "How someone identifies politically.",
    example: "Party membership can shape political identity.",
    related: "Ideology, Political Party, Citizenship"
},
{
    term: "Political Values",
    category: "Political Science",
    definition: "Beliefs and principles that influence political opinions and behavior.",
    simple: "Ideas that shape political beliefs.",
    example: "Freedom and equality are common political values.",
    related: "Political Culture, Ideology, Democracy"
},
{
    term: "Political Ideals",
    category: "Political Science",
    definition: "Goals or principles that people believe government should pursue.",
    simple: "The kind of government people hope to achieve.",
    example: "Justice and liberty are political ideals.",
    related: "Political Values, Democracy, Justice"
},
{
    term: "Political Accountability",
    category: "Political Science",
    definition: "The responsibility of political leaders to answer for their actions before the public.",
    simple: "Leaders should explain and justify their decisions.",
    example: "Regular elections promote political accountability.",
    related: "Accountability, Democracy, Governance"
},
{
    term: "Political Responsibility",
    category: "Political Science",
    definition: "The obligation of political leaders to act in the public interest.",
    simple: "Leaders should serve the people responsibly.",
    example: "Public officials have political responsibility to uphold the Constitution.",
    related: "Leadership, Accountability, Governance"
},
{
    term: "Political Equality",
    category: "Political Science",
    definition: "The principle that all citizens have equal political rights and opportunities.",
    simple: "Everyone has equal political rights.",
    example: "Universal suffrage supports political equality.",
    related: "Equality, Suffrage, Democracy"
},
{
    term: "Political Freedom",
    category: "Political Science",
    definition: "The ability of citizens to participate freely in political life.",
    simple: "People are free to take part in politics.",
    example: "Freedom to vote is a political freedom.",
    related: "Liberty, Democracy, Human Rights"
},
{
    term: "Political Obligation",
    category: "Political Science",
    definition: "The duty of citizens to obey legitimate laws and support lawful government.",
    simple: "Citizens have responsibilities to the state.",
    example: "Paying taxes is often considered a political obligation.",
    related: "Citizenship, Rule of Law, State"
},
{
    term: "Political Order",
    category: "Political Science",
    definition: "A condition where political institutions maintain stability and public order.",
    simple: "A stable political system.",
    example: "Strong institutions help maintain political order.",
    related: "Political Stability, Governance, State"
},
{
    term: "Political Organization",
    category: "Political Science",
    definition: "A group formed to pursue political goals or influence government.",
    simple: "A group involved in politics.",
    example: "Political parties are political organizations.",
    related: "Political Party, Interest Group, Civil Society"
},
{
    term: "Political Communication",
    category: "Political Science",
    definition: "The exchange of political information between leaders, media, and citizens.",
    simple: "How political information is shared.",
    example: "Debates and speeches are forms of political communication.",
    related: "Mass Media, Public Opinion, Democracy"
},
{
    term: "Political Decision-Making",
    category: "Political Science",
    definition: "The process by which governments and political leaders choose policies and actions.",
    simple: "How political leaders make decisions.",
    example: "Cabinet meetings involve political decision-making.",
    related: "Governance, Public Policy, Government"
},
{
    term: "Political Authority",
    category: "Political Science",
    definition: "The legitimate right to exercise political power over a community.",
    simple: "The accepted right of leaders to govern.",
    example: "A democratically elected president exercises political authority.",
    related: "Authority, Legitimacy, Government"
},
{
    term: "Political Community",
    category: "Political Science",
    definition: "A group of people living under a common political system and authority.",
    simple: "People united under one government.",
    example: "The Filipino people form a political community.",
    related: "State, Nation, Citizenship"
},
{
    term: "Political Development",
    category: "Political Science",
    definition: "The improvement of political institutions, participation, and governance over time.",
    simple: "The growth of a country's political system.",
    example: "Free elections contribute to political development.",
    related: "Democracy, Governance, Political Stability"
},
{
    term: "Political Modernization",
    category: "Political Science",
    definition: "The transformation of political institutions to become more effective and democratic.",
    simple: "Updating political systems to meet modern needs.",
    example: "Digital governance is part of political modernization.",
    related: "Political Development, Governance, Public Administration"
},
{
    term: "Political Change",
    category: "Political Science",
    definition: "A significant transformation in political institutions, leadership, or policies.",
    simple: "Changes in government or politics.",
    example: "Constitutional reforms brought major political change.",
    related: "Political Development, Reform, Revolution"
},
{
    term: "Political Reform",
    category: "Political Science",
    definition: "Changes made to improve political institutions or government processes.",
    simple: "Improving how government works.",
    example: "Electoral reforms aim to strengthen democracy.",
    related: "Governance, Democracy, Public Policy"
},
{
    term: "Political Crisis",
    category: "Political Science",
    definition: "A situation that threatens the stability or legitimacy of a government.",
    simple: "A serious political problem.",
    example: "A disputed election may trigger a political crisis.",
    related: "Political Stability, Government, Conflict"
},
{
    term: "Political Violence",
    category: "Political Science",
    definition: "The use of force to achieve political goals.",
    simple: "Violence used for political purposes.",
    example: "Armed rebellion is a form of political violence.",
    related: "Conflict, Revolution, Terrorism"
},
{
    term: "Political Consensus",
    category: "Political Science",
    definition: "General agreement among political actors on important issues.",
    simple: "Leaders agree on a political issue.",
    example: "Political consensus helped pass the education reform bill.",
    related: "Negotiation, Governance, Public Policy"
},
{
    term: "Political Cooperation",
    category: "Political Science",
    definition: "Working together to achieve shared political goals.",
    simple: "Different groups cooperate in politics.",
    example: "Political parties formed a coalition through political cooperation.",
    related: "Coalition, Governance, Negotiation"
},
{
    term: "Political Negotiation",
    category: "Political Science",
    definition: "Discussions between political actors to reach agreements.",
    simple: "Talking to solve political disagreements.",
    example: "Peace negotiations ended years of conflict.",
    related: "Diplomacy, Conflict Resolution, Consensus"
},
{
    term: "Political Bargaining",
    category: "Political Science",
    definition: "The exchange of support or concessions to reach political agreements.",
    simple: "Leaders compromise to reach agreements.",
    example: "Political bargaining helped pass the national budget.",
    related: "Negotiation, Coalition, Legislature"
},
{
    term: "Political Representation Theory",
    category: "Political Science",
    definition: "The study of how elected officials represent the interests of citizens.",
    simple: "It explains how leaders represent the people.",
    example: "Political representation theory is discussed in democratic systems.",
    related: "Representation, Democracy, Legislature"
},
{
    term: "Political Legitimization",
    category: "Political Science",
    definition: "The process of gaining public acceptance and recognition of political authority.",
    simple: "Making government accepted by the people.",
    example: "Fair elections strengthen political legitimization.",
    related: "Legitimacy, Democracy, Authority"
},
{
    term: "Political Accountability Mechanism",
    category: "Political Science",
    definition: "A process or institution that holds public officials responsible for their actions.",
    simple: "Ways to make leaders answer for their actions.",
    example: "Congressional investigations are accountability mechanisms.",
    related: "Accountability, Oversight, Governance"
},
{
    term: "Political Analysis",
    category: "Political Science",
    definition: "The systematic study and evaluation of political events, institutions, actors, and policies.",
    simple: "Studying politics to understand what is happening and why.",
    example: "Political Science students conduct political analysis during elections.",
    related: "Political Science, Public Policy, Comparative Politics"
},
{
    term: "Classical Liberalism",
    category: "Political Theory & Ideologies",
    definition: "A political ideology emphasizing individual liberty, limited government, private property, and free markets.",
    simple: "It supports freedom and limited government.",
    example: "John Locke greatly influenced classical liberalism.",
    related: "Liberalism, Liberty, Limited Government"
},
{
    term: "Modern Liberalism",
    category: "Political Theory & Ideologies",
    definition: "A form of liberalism that supports government action to promote equality and social welfare.",
    simple: "Government helps improve people's welfare.",
    example: "Public healthcare is often supported by modern liberals.",
    related: "Liberalism, Welfare State, Social Democracy"
},
{
    term: "Neoliberalism",
    category: "Political Theory & Ideologies",
    definition: "An ideology favoring free markets, privatization, deregulation, and limited government intervention.",
    simple: "It supports a free-market economy.",
    example: "Many economic reforms since the 1980s reflect neoliberal ideas.",
    related: "Capitalism, Free Market, Liberalism"
},
{
    term: "Capitalism",
    category: "Political Theory & Ideologies",
    definition: "An economic system based on private ownership and market competition.",
    simple: "Businesses are privately owned.",
    example: "Most countries today practice some form of capitalism.",
    related: "Free Market, Socialism, Neoliberalism"
},
{
    term: "Environmentalism",
    category: "Political Theory & Ideologies",
    definition: "An ideology promoting environmental protection and sustainable development.",
    simple: "Protecting nature through government action.",
    example: "Climate policies are influenced by environmentalism.",
    related: "Sustainability, Green Politics, Public Policy"
},
{
    term: "Green Politics",
    category: "Political Theory & Ideologies",
    definition: "A political ideology emphasizing environmental protection, democracy, and social justice.",
    simple: "Politics focused on protecting the environment.",
    example: "Green parties support renewable energy.",
    related: "Environmentalism, Sustainability, Climate Change"
},
{
    term: "Secularism",
    category: "Political Theory & Ideologies",
    definition: "The principle that government should remain neutral regarding religion.",
    simple: "Religion and government should remain separate.",
    example: "Secularism supports freedom of religion.",
    related: "Separation of Church and State, Liberty, Constitution"
},
{
    term: "Political Realism",
    category: "Political Theory & Ideologies",
    definition: "A perspective emphasizing power and national interest as the basis of politics.",
    simple: "Politics is mainly about power.",
    example: "Realists argue states prioritize survival.",
    related: "Power, National Interest, International Relations"
},
{
    term: "Political Idealism",
    category: "Political Theory & Ideologies",
    definition: "A perspective emphasizing morality, cooperation, and shared values in politics.",
    simple: "Politics should be guided by moral principles.",
    example: "Idealists support international cooperation.",
    related: "Liberalism, International Relations, Peace"
},
{
    term: "Communitarianism",
    category: "Political Theory & Ideologies",
    definition: "A philosophy emphasizing the importance of community and shared responsibilities.",
    simple: "Communities are as important as individual rights.",
    example: "Communitarian thinkers stress civic responsibility.",
    related: "Citizenship, Civil Society, Republicanism"
},
{
    term: "Utopianism",
    category: "Political Theory & Ideologies",
    definition: "A political idea that imagines an ideal society based on justice, equality, or harmony.",
    simple: "It imagines a perfect or better society.",
    example: "Some political thinkers describe ideal societies to criticize existing systems.",
    related: "Political Theory, Socialism, Justice"
},
{
    term: "Pragmatism",
    category: "Political Theory & Ideologies",
    definition: "A political approach that focuses on practical results rather than strict ideology.",
    simple: "It focuses on what works.",
    example: "A pragmatic leader may choose policies based on results instead of ideology.",
    related: "Public Policy, Governance, Political Decision-Making"
},
{
    term: "Radicalism",
    category: "Political Theory & Ideologies",
    definition: "An ideology or approach that seeks deep and fundamental political or social change.",
    simple: "It wants major change, not small reforms.",
    example: "Radical movements often challenge existing institutions.",
    related: "Revolution, Reform, Ideology"
},
{
    term: "Reformism",
    category: "Political Theory & Ideologies",
    definition: "The belief that political and social change should happen gradually through legal and institutional reforms.",
    simple: "It supports gradual change through reforms.",
    example: "Reformists may push for electoral or constitutional reforms.",
    related: "Political Reform, Democracy, Constitutionalism"
},
{
    term: "Revolutionary Ideology",
    category: "Political Theory & Ideologies",
    definition: "A set of beliefs that supports replacing an existing political order through revolutionary change.",
    simple: "It supports replacing the current system completely.",
    example: "Revolutionary ideologies often emerge during periods of inequality or oppression.",
    related: "Revolution, Radicalism, Political Change"
},
{
    term: "Anti-Colonialism",
    category: "Political Theory & Ideologies",
    definition: "An ideology opposing colonial rule and supporting the self-determination of colonized peoples.",
    simple: "It opposes foreign colonial control.",
    example: "Anti-colonialism influenced independence movements in Asia and Africa.",
    related: "Nationalism, Self-Determination, Sovereignty"
},
{
    term: "Postcolonialism",
    category: "Political Theory & Ideologies",
    definition: "A perspective that studies the political, cultural, and economic effects of colonialism after colonial rule ends.",
    simple: "It studies the effects of colonialism after independence.",
    example: "Postcolonialism examines how colonial history still affects politics today.",
    related: "Colonialism, Anti-Colonialism, Global South"
},
{
    term: "Cosmopolitanism",
    category: "Political Theory & Ideologies",
    definition: "The belief that all human beings belong to a single global community with shared moral responsibilities.",
    simple: "People are citizens of the world, not only one country.",
    example: "Human rights ideas are often connected to cosmopolitanism.",
    related: "Human Rights, Globalization, International Relations"
},
{
    term: "Communalism",
    category: "Political Theory & Ideologies",
    definition: "A political idea that emphasizes community ownership, shared responsibility, and collective life.",
    simple: "It focuses on community sharing and responsibility.",
    example: "Some local movements promote communal management of resources.",
    related: "Collectivism, Community, Socialism"
},
{
    term: "Egalitarianism",
    category: "Political Theory & Ideologies",
    definition: "The belief that people should have equal moral, political, or social worth.",
    simple: "It supports equality among people.",
    example: "Egalitarianism influences policies on equal rights and social justice.",
    related: "Equality, Social Justice, Human Rights"
},
{
    term: "Majoritarianism",
    category: "Political Theory & Ideologies",
    definition: "The idea that the majority should have the main authority in political decision-making.",
    simple: "The majority decides.",
    example: "Democratic systems often balance majoritarianism with minority rights.",
    related: "Democracy, Majority Vote, Minority Rights"
},
{
    term: "Minoritarianism",
    category: "Political Theory & Ideologies",
    definition: "The protection or influence of minority groups in political decision-making.",
    simple: "Minority voices should also be protected.",
    example: "Constitutional rights help prevent majority rule from ignoring minorities.",
    related: "Minority Rights, Democracy, Constitutionalism"
},
{
    term: "Crab Mentality",
    category: "Political Behavior & Research",
    definition: "A social attitude in which individuals attempt to prevent others from succeeding out of envy, resentment, or competition.",
    simple: "Trying to pull others down instead of helping them succeed.",
    example: "Crab mentality may discourage capable individuals from entering public service or leadership.",
    related: "Political Culture, Social Capital, Leadership"
},,
{
    term: "Colonial Mentality",
    category: "Political Behavior & Research",
    definition: "A mindset in which people regard foreign cultures, products, or institutions as superior to their own.",
    simple: "Believing foreign things are better than local ones.",
    example: "Colonial mentality may influence political preferences and public attitudes.",
    related: "Political Culture, Nationalism, Identity"
},
{
    term: "Utang na Loob",
    category: "Political Behavior & Research",
    definition: "A Filipino cultural value of repaying a debt of gratitude, which may influence political behavior and decision-making.",
    simple: "Feeling obligated to repay someone's kindness.",
    example: "Some voters support politicians because of utang na loob.",
    related: "Political Culture, Patron-Client Relationship, Vote Buying"
},
{
    term: "Pakikisama",
    category: "Political Behavior & Research",
    definition: "A Filipino cultural value emphasizing harmony, cooperation, and maintaining good relationships with others.",
    simple: "Getting along with others to maintain harmony.",
    example: "Pakikisama may influence voting and organizational decisions.",
    related: "Political Culture, Group Behavior, Leadership"
},
{
    term: "Palakasan System",
    category: "Philippine Government",
    definition: "An informal practice in which personal connections or influence are used to gain advantages instead of merit.",
    simple: "Using connections instead of qualifications.",
    example: "Critics argue that the palakasan system weakens merit-based public service.",
    related: "Nepotism, Cronyism, Patronage"
},
{
    term: "Nepotism",
    category: "Political Theory & Ideologies",
    definition: "The practice of favoring relatives in appointments, employment, or political positions regardless of merit.",
    simple: "Giving jobs or positions to family members.",
    example: "Nepotism reduces fairness in public service.",
    related: "Cronyism, Patronage, Meritocracy"
},
{
    term: "Cronyism",
    category: "Political Theory & Ideologies",
    definition: "The practice of giving advantages to close friends or political allies instead of qualified individuals.",
    simple: "Favoring friends instead of choosing the most qualified person.",
    example: "Cronyism may weaken government accountability.",
    related: "Nepotism, Patronage, Corruption"
},
{
    term: "Patron-Client Relationship",
    category: "Political Theory & Ideologies",
    definition: "A relationship in which a powerful patron provides benefits to clients in exchange for political support or loyalty.",
    simple: "Support is exchanged for favors or assistance.",
    example: "Patron-client relationships remain common in local politics.",
    related: "Clientelism, Patronage Politics, Vote Buying"
},
{
    term: "Vote Buying",
    category: "Philippine Government",
    definition: "The illegal practice of offering money, goods, or favors in exchange for votes during elections.",
    simple: "Giving money or gifts to influence votes.",
    example: "COMELEC prohibits vote buying during elections.",
    related: "Election, Corruption, Clientelism"
},
{
    term: "Political Machine",
    category: "Political Theory & Ideologies",
    definition: "A highly organized political organization that maintains power through networks of supporters and patronage.",
    simple: "A political organization that controls elections through loyal supporters.",
    example: "Political machines became influential in many cities during the 20th century.",
    related: "Machine Politics, Patronage, Political Party"
},
{
    term: "Machine Politics",
    category: "Political Theory & Ideologies",
    definition: "A system where organized political groups maintain influence through patronage, loyalty, and electoral support.",
    simple: "Politics controlled by powerful organizations and loyal supporters.",
    example: "Machine politics often relies on political patronage.",
    related: "Political Machine, Patronage, Clientelism"
},
{
    term: "Political Patronage",
    category: "Political Theory & Ideologies",
    definition: "The distribution of government positions, contracts, or benefits in exchange for political support.",
    simple: "Rewarding supporters with government benefits or jobs.",
    example: "Political patronage can reduce merit-based appointments.",
    related: "Patronage Politics, Clientelism, Nepotism"
},
{
    term: "Pork Barrel",
    category: "Political Theory & Ideologies",
    definition: "Government spending allocated to specific local projects primarily to benefit a legislator's constituency and gain political support.",
    simple: "Public funds used for local projects that may increase political popularity.",
    example: "The Priority Development Assistance Fund was commonly associated with pork barrel politics.",
    related: "Public Finance, Budget, Corruption"
},
{
    term: "Rent-Seeking",
    category: "Political Theory & Ideologies",
    definition: "The practice of gaining wealth or advantages through political influence rather than productive economic activity.",
    simple: "Using political power to gain special benefits.",
    example: "Companies may lobby for exclusive government privileges through rent-seeking.",
    related: "Cronyism, Corruption, Elite Capture"
},
{
    term: "Elite Capture",
    category: "Political Theory & Ideologies",
    definition: "A situation where powerful individuals or groups control public resources or institutions for their own benefit.",
    simple: "Powerful people control resources meant for everyone.",
    example: "Elite capture may prevent government programs from reaching poor communities.",
    related: "Political Elite, Corruption, Rent-Seeking"
},
{
    term: "Political Clan",
    category: "Philippine Government",
    definition: "A family with long-standing political influence, though not necessarily holding simultaneous elected positions.",
    simple: "A family known for its political influence across generations.",
    example: "Some political clans have remained influential for decades.",
    related: "Political Dynasty, Election, Local Government"
},
{
    term: "Voting Behavior",
    category: "Political Behavior & Research",
    definition: "The study of how and why people choose particular candidates or political parties during elections.",
    simple: "It explains why people vote the way they do.",
    example: "Researchers analyze voting behavior using surveys and election results.",
    related: "Election, Public Opinion, Political Participation"
},
{
    term: "Political Efficacy",
    category: "Political Behavior & Research",
    definition: "The belief that an individual can influence political processes and government decisions.",
    simple: "Believing your actions can affect politics.",
    example: "Citizens with high political efficacy are more likely to vote.",
    related: "Political Participation, Democracy, Citizenship"
},
{
    term: "Political Trust",
    category: "Political Behavior & Research",
    definition: "The level of confidence citizens have in government institutions and public officials.",
    simple: "How much people trust the government.",
    example: "Corruption scandals often reduce political trust.",
    related: "Public Opinion, Legitimacy, Accountability"
},
{
    term: "Political Alienation",
    category: "Political Behavior & Research",
    definition: "A feeling of powerlessness or disconnection from political institutions and processes.",
    simple: "Feeling that politics does not represent you.",
    example: "Low voter turnout may reflect political alienation.",
    related: "Political Participation, Political Trust, Democracy"
},
{
    term: "Political Awareness",
    category: "Political Behavior & Research",
    definition: "The extent to which citizens understand political issues, institutions, and current events.",
    simple: "Knowing about politics and government.",
    example: "Political awareness often increases through education and media.",
    related: "Political Socialization, Citizenship, Public Opinion"
},
{
    term: "Political Apathy",
    category: "Political Behavior & Research",
    definition: "A lack of interest or concern about politics and public affairs.",
    simple: "Not caring about politics.",
    example: "Political apathy may reduce voter turnout.",
    related: "Political Participation, Political Alienation, Democracy"
},
{
    term: "Opinion Leader",
    category: "Political Behavior & Research",
    definition: "A person who influences the political opinions and decisions of others.",
    simple: "Someone who shapes other people's political views.",
    example: "Community leaders often serve as opinion leaders during elections.",
    related: "Political Communication, Mass Media, Public Opinion"
},
{
    term: "Political Polarization",
    category: "Political Behavior & Research",
    definition: "The process in which political opinions become more divided between opposing groups.",
    simple: "Political groups become more divided.",
    example: "Social media has contributed to political polarization in many countries.",
    related: "Public Opinion, Ideology, Political Communication"
},
{
    term: "Disinformation",
    category: "Political Behavior & Research",
    definition: "False information intentionally created and spread to mislead the public.",
    simple: "False information spread on purpose.",
    example: "Disinformation campaigns can influence elections.",
    related: "Political Communication, Mass Media, Public Opinion"
},
{
    term: "Misinformation",
    category: "Political Behavior & Research",
    definition: "False or inaccurate information shared without the intention to deceive.",
    simple: "Wrong information shared by mistake.",
    example: "People sometimes unknowingly share misinformation online.",
    related: "Disinformation, Political Communication, Mass Media"
},
{
    term: "Social Capital",
    category: "Political Behavior & Research",
    definition: "The networks, trust, and cooperation among people that strengthen society and democratic participation.",
    simple: "Trust and cooperation among people.",
    example: "Communities with strong social capital often have higher civic participation.",
    related: "Civil Society, Political Participation, Political Trust"
},
{
    term: "Policy Formulation",
    category: "Public Policy & Political Economy",
    definition: "The process of developing policy proposals to address public problems.",
    simple: "Creating possible government solutions.",
    example: "Experts help in policy formulation before a law is passed.",
    related: "Public Policy, Policy Analysis, Governance"
},
{
    term: "Policy Adoption",
    category: "Public Policy & Political Economy",
    definition: "The stage where a proposed policy is officially approved by government authorities.",
    simple: "Government officially approves a policy.",
    example: "Congress adopts laws after approval by the President.",
    related: "Public Policy, Lawmaking, Policy Implementation"
},
{
    term: "Policy Agenda",
    category: "Public Policy & Political Economy",
    definition: "A list of issues that government officials consider important for action.",
    simple: "The government's priority issues.",
    example: "Inflation became part of the government's policy agenda.",
    related: "Agenda-Setting, Public Policy, Governance"
},
{
    term: "Public Expenditure",
    category: "Public Policy & Political Economy",
    definition: "Government spending on programs, services, and infrastructure.",
    simple: "Money spent by the government.",
    example: "Education receives a large share of public expenditure.",
    related: "Budget, Public Finance, Taxation"
},
{
    term: "Fiscal Deficit",
    category: "Public Policy & Political Economy",
    definition: "A situation where government spending exceeds government revenue.",
    simple: "Government spends more than it earns.",
    example: "A fiscal deficit may increase public debt.",
    related: "Budget, Public Finance, Taxation"
},
{
    term: "Public Debt",
    category: "Public Policy & Political Economy",
    definition: "The total amount of money owed by the government.",
    simple: "Money the government owes.",
    example: "Governments borrow money to finance development projects.",
    related: "Fiscal Deficit, Budget, Public Finance"
},
{
    term: "Redistribution",
    category: "Public Policy & Political Economy",
    definition: "The transfer of wealth or income through taxes and government spending to reduce inequality.",
    simple: "Government helps reduce income inequality.",
    example: "Social welfare programs are forms of redistribution.",
    related: "Taxation, Welfare State, Equality"
},
{
    term: "Economic Development",
    category: "Public Policy & Political Economy",
    definition: "Long-term improvements in a country's economy and quality of life.",
    simple: "Improving the economy and people's lives.",
    example: "Infrastructure projects support economic development.",
    related: "Development, Political Economy, Public Policy"
},
{
    term: "Cost-Benefit Analysis",
    category: "Public Policy & Political Economy",
    definition: "A method of comparing the expected costs and benefits of a policy or project.",
    simple: "Comparing advantages and disadvantages before deciding.",
    example: "Governments use cost-benefit analysis before building major infrastructure.",
    related: "Policy Analysis, Public Policy, Evaluation"
},
{
    term: "Regulation",
    category: "Public Policy & Political Economy",
    definition: "Rules created by government to guide or control activities in society and the economy.",
    simple: "Government rules for businesses and citizens.",
    example: "Environmental regulations protect natural resources.",
    related: "Governance, Public Policy, Law"
},
{
    term: "Subsidy",
    category: "Public Policy & Political Economy",
    definition: "Financial assistance provided by the government to support individuals, businesses, or industries.",
    simple: "Government gives financial support.",
    example: "Farmers may receive agricultural subsidies.",
    related: "Public Finance, Budget, Welfare State"
},
{
    term: "Public Goods",
    category: "Public Policy & Political Economy",
    definition: "Goods or services that are available to everyone and cannot easily exclude users.",
    simple: "Services everyone can use.",
    example: "Street lighting and national defense are public goods.",
    related: "Public Service, Government, Political Economy"
},
{
    term: "State Actor",
    category: "International Relations",
    definition: "A country or government that participates in international affairs.",
    simple: "A country involved in world politics.",
    example: "The Philippines is a state actor in ASEAN.",
    related: "State, Diplomacy, Foreign Policy"
},
{
    term: "Non-State Actor",
    category: "International Relations",
    definition: "An organization or group that influences international affairs but is not a government.",
    simple: "Groups other than governments that affect world politics.",
    example: "The Red Cross is a non-state actor.",
    related: "NGO, International Organization, Globalization"
},
{
    term: "Global Governance",
    category: "International Relations",
    definition: "International cooperation to solve global problems.",
    simple: "Countries working together on world issues.",
    example: "The UN promotes global governance.",
    related: "United Nations, International Cooperation, Diplomacy"
},
{
    term: "National Power",
    category: "International Relations",
    definition: "The total ability of a country to influence other countries.",
    simple: "A country's strength and influence.",
    example: "Military and economic strength increase national power.",
    related: "Soft Power, Hard Power, National Interest"
},
{
    term: "Collective Security",
    category: "International Relations",
    definition: "An agreement where countries work together against threats to peace.",
    simple: "Countries protect each other.",
    example: "The United Nations supports collective security.",
    related: "United Nations, Alliance, Peacekeeping"
},
{
    term: "Conflict",
    category: "International Relations",
    definition: "A disagreement or struggle between countries or groups.",
    simple: "A dispute between countries.",
    example: "Border disputes may lead to conflict.",
    related: "War, Diplomacy, Peacekeeping"
},
{
    term: "War",
    category: "International Relations",
    definition: "An armed conflict between states or organized groups.",
    simple: "Fighting between countries or groups.",
    example: "Diplomacy seeks to prevent war.",
    related: "Conflict, Peace, Security"
},
{
    term: "Peace",
    category: "International Relations",
    definition: "A condition where countries maintain friendly relations without armed conflict.",
    simple: "No war between countries.",
    example: "Peace agreements end armed conflicts.",
    related: "Diplomacy, Treaty, Peacekeeping"
},
{
    term: "Border",
    category: "International Relations",
    definition: "The official boundary separating one country from another.",
    simple: "The line dividing countries.",
    example: "Countries sometimes disagree over borders.",
    related: "Territory, Sovereignty, State"
},
{
    term: "Territorial Dispute",
    category: "International Relations",
    definition: "A disagreement between countries over ownership of land or maritime areas.",
    simple: "Countries arguing over territory.",
    example: "The West Philippine Sea involves territorial disputes.",
    related: "Sovereignty, International Law, Territory"
},
{
    term: "Embassy",
    category: "International Relations",
    definition: "The official office of one country located in another country.",
    simple: "A country's office in another country.",
    example: "The Philippine Embassy assists Filipinos abroad.",
    related: "Diplomacy, Ambassador, Foreign Policy"
},
{
    term: "Ambassador",
    category: "International Relations",
    definition: "The official representative of one country to another.",
    simple: "A country's top diplomat.",
    example: "The ambassador represents the Philippines overseas.",
    related: "Embassy, Diplomacy, Foreign Policy"
},
{
    term: "International Cooperation",
    category: "International Relations",
    definition: "Countries working together to solve common problems.",
    simple: "Countries helping one another.",
    example: "ASEAN promotes international cooperation.",
    related: "Global Governance, Diplomacy, United Nations"
},
{
    term: "Civil Law",
    category: "Law & Jurisprudence",
    definition: "The branch of law dealing with disputes between individuals or organizations.",
    simple: "Law about private disputes.",
    example: "Property disputes are handled under civil law.",
    related: "Civil Case, Court, Plaintiff"
},
{
    term: "Criminal Law",
    category: "Law & Jurisprudence",
    definition: "The branch of law dealing with crimes and punishments.",
    simple: "Law about crimes.",
    example: "Theft is covered by criminal law.",
    related: "Criminal Case, Penalty, Justice"
},
{
    term: "Defendant",
    category: "Law & Jurisprudence",
    definition: "The person being sued in a civil case or accused in court.",
    simple: "The person being complained against.",
    example: "The defendant answered the complaint.",
    related: "Plaintiff, Court, Trial"
},
{
    term: "Plaintiff",
    category: "Law & Jurisprudence",
    definition: "The person who files a civil case in court.",
    simple: "The person bringing the case.",
    example: "The plaintiff filed a complaint for damages.",
    related: "Defendant, Civil Case, Court"
},
{
    term: "Prosecution",
    category: "Law & Jurisprudence",
    definition: "The side responsible for proving that the accused committed a crime.",
    simple: "The side trying to prove guilt.",
    example: "The prosecution presented witnesses during trial.",
    related: "Defense, Trial, Criminal Law"
},
{
    term: "Defense",
    category: "Law & Jurisprudence",
    definition: "The side representing the accused in a legal case.",
    simple: "The side protecting the accused.",
    example: "The defense argued that the accused was innocent.",
    related: "Prosecution, Trial, Lawyer"
},
{
    term: "Attorney",
    category: "Law & Jurisprudence",
    definition: "A licensed lawyer who represents clients in legal matters.",
    simple: "A lawyer.",
    example: "The attorney represented the client in court.",
    related: "Lawyer, Court, Trial"
},
{
    term: "Judge",
    category: "Law & Jurisprudence",
    definition: "A public official who hears and decides legal cases.",
    simple: "The person who decides court cases.",
    example: "The judge issued the court's decision.",
    related: "Court, Judiciary, Judgment"
},
{
    term: "Verdict",
    category: "Law & Jurisprudence",
    definition: "The decision reached in a legal case.",
    simple: "The court's decision.",
    example: "The verdict was announced after the trial.",
    related: "Judgment, Trial, Court"
},
{
    term: "Sentence",
    category: "Law & Jurisprudence",
    definition: "The punishment imposed after a criminal conviction.",
    simple: "The punishment given by the court.",
    example: "The judge imposed the sentence after conviction.",
    related: "Penalty, Conviction, Criminal Law"
},
{
    term: "Fine",
    category: "Law & Jurisprudence",
    definition: "Money ordered by a court as punishment for violating the law.",
    simple: "Money paid as punishment.",
    example: "Traffic violations may result in a fine.",
    related: "Penalty, Court, Law"
},
{
    term: "Imprisonment",
    category: "Law & Jurisprudence",
    definition: "The punishment of being confined in jail or prison.",
    simple: "Being sent to jail.",
    example: "Serious crimes may lead to imprisonment.",
    related: "Penalty, Criminal Law, Sentence"
},
{
    term: "Appeal",
    category: "Law & Jurisprudence",
    definition: "A request for a higher court to review a lower court's decision.",
    simple: "Asking another court to review the case.",
    example: "The losing party filed an appeal.",
    related: "Court, Judgment, Judiciary"
},
{
    term: "Jurisdiction",
    category: "Law & Jurisprudence",
    definition: "The legal authority of a court to hear and decide a case.",
    simple: "A court's legal power.",
    example: "The case was dismissed because the court lacked jurisdiction.",
    related: "Court, Judiciary, Law"
},
{
    term: "Legal Counsel",
    category: "Law & Jurisprudence",
    definition: "A lawyer who gives legal advice or represents a client.",
    simple: "A lawyer who provides legal help.",
    example: "The company hired legal counsel.",
    related: "Attorney, Lawyer, Court"
},
{
    term: "Court of Appeals",
    category: "Law & Jurisprudence",
    definition: "A court that reviews decisions made by lower courts.",
    simple: "A higher court that reviews cases.",
    example: "The case was elevated to the Court of Appeals.",
    related: "Appeal, Judiciary, Court"
},
{
    term: "Public Administration",
    category: "Governance & Public Administration",
    definition: "The implementation of government policies and the management of public programs.",
    simple: "How government carries out its work.",
    example: "Government agencies practice public administration every day.",
    related: "Governance, Bureaucracy, Civil Service"
},
{
    term: "Public Official",
    category: "Governance & Public Administration",
    definition: "A person elected or appointed to perform government duties.",
    simple: "Someone who works for the government.",
    example: "The mayor is a public official.",
    related: "Civil Service, Government, Public Service"
},
{
    term: "Civil Servant",
    category: "Governance & Public Administration",
    definition: "A government employee who performs public duties under the civil service system.",
    simple: "A government employee.",
    example: "Teachers in public schools are civil servants.",
    related: "Civil Service, Public Administration, Government"
},
{
    term: "Administrative Accountability",
    category: "Governance & Public Administration",
    definition: "The responsibility of public officials to explain and justify their administrative actions.",
    simple: "Government officials must answer for their work.",
    example: "Government auditors promote administrative accountability.",
    related: "Accountability, Transparency, Good Governance"
},
{
    term: "Administrative Efficiency",
    category: "Governance & Public Administration",
    definition: "The ability of government agencies to deliver services using resources wisely.",
    simple: "Government works quickly and without waste.",
    example: "Online government services improve administrative efficiency.",
    related: "Efficiency, Public Administration, Governance"
},
{
    term: "Public Management",
    category: "Governance & Public Administration",
    definition: "The management of government organizations and public resources.",
    simple: "Managing government offices and services.",
    example: "Public management improves service delivery.",
    related: "Public Administration, Governance, Leadership"
},
{
    term: "Service Delivery",
    category: "Governance & Public Administration",
    definition: "The provision of public services by government agencies.",
    simple: "Government providing services to people.",
    example: "Healthcare is an example of service delivery.",
    related: "Public Service, Governance, Public Administration"
},
{
    term: "Citizen Participation",
    category: "Governance & Public Administration",
    definition: "The involvement of citizens in government programs and decision-making.",
    simple: "People taking part in government decisions.",
    example: "Public consultations encourage citizen participation.",
    related: "Participation, Democracy, Governance"
},
{
    term: "Administrative Ethics",
    category: "Governance & Public Administration",
    definition: "The moral principles that guide the conduct of public officials.",
    simple: "Doing the right thing in government service.",
    example: "Honesty is part of administrative ethics.",
    related: "Integrity, Accountability, Public Service"
},
{
    term: "Integrity",
    category: "Governance & Public Administration",
    definition: "Honesty and adherence to moral and ethical principles in public service.",
    simple: "Being honest and trustworthy.",
    example: "Integrity is expected from all public officials.",
    related: "Ethics, Accountability, Transparency"
},
{
    term: "Public Accountability",
    category: "Governance & Public Administration",
    definition: "The obligation of public officials to explain and accept responsibility for their actions.",
    simple: "Government officials answer to the people.",
    example: "Public accountability strengthens democracy.",
    related: "Accountability, Transparency, Governance"
},
{
    term: "Administrative Law",
    category: "Governance & Public Administration",
    definition: "The body of law governing government agencies and administrative actions.",
    simple: "Rules that guide government agencies.",
    example: "Administrative law regulates public agencies.",
    related: "Law, Public Administration, Government"
},
{
    term: "Decentralized Governance",
    category: "Governance & Public Administration",
    definition: "A system where decision-making powers are transferred to local governments.",
    simple: "Local governments receive more authority.",
    example: "The Local Government Code supports decentralized governance.",
    related: "Decentralization, Local Government, Autonomy"
},
{
    term: "Administrative Discretion",
    category: "Governance & Public Administration",
    definition: "The authority of public officials to make decisions within the limits of the law.",
    simple: "Officials make decisions allowed by law.",
    example: "Agency heads exercise administrative discretion.",
    related: "Public Administration, Authority, Law"
},
{
    term: "Public Sector",
    category: "Governance & Public Administration",
    definition: "The part of the economy managed by government.",
    simple: "Government organizations and agencies.",
    example: "Public schools belong to the public sector.",
    related: "Government, Public Service, Governance"
},
{
    term: "Administrative Reform",
    category: "Governance & Public Administration",
    definition: "Changes made to improve government efficiency and effectiveness.",
    simple: "Improving government operations.",
    example: "Digitalization is an administrative reform.",
    related: "Governance, Public Administration, Efficiency"
},
{
    term: "Government Agency",
    category: "Governance & Public Administration",
    definition: "An organization created by the government to perform specific functions.",
    simple: "A government office with specific duties.",
    example: "The DILG is a government agency.",
    related: "Public Administration, Bureaucracy, Government"
},
{
    term: "Interagency Coordination",
    category: "Governance & Public Administration",
    definition: "Cooperation among different government agencies to achieve common goals.",
    simple: "Government agencies working together.",
    example: "Disaster response requires interagency coordination.",
    related: "Governance, Public Administration, Cooperation"
},
{
    term: "Constitutional Rights",
    category: "Constitutional Law",
    definition: "Rights guaranteed and protected by the Constitution.",
    simple: "Rights protected by the Constitution.",
    example: "Freedom of speech is a constitutional right.",
    related: "Bill of Rights, Constitution, Liberty"
},
{
    term: "Constitutional Amendment",
    category: "Constitutional Law",
    definition: "A formal change made to the Constitution.",
    simple: "Changing the Constitution.",
    example: "Constitutional amendments require legal procedures.",
    related: "Constitution, Constitutional Convention, Charter Change"
},
{
    term: "Charter Change",
    category: "Constitutional Law",
    definition: "The process of revising or amending the Constitution.",
    simple: "Changing the country's Constitution.",
    example: "Charter Change is often debated in Philippine politics.",
    related: "Constitutional Amendment, Constitution"
},
{
    term: "Constitutional Convention",
    category: "Constitutional Law",
    definition: "A body elected to draft or revise a constitution.",
    simple: "A group chosen to rewrite the Constitution.",
    example: "A Constitutional Convention may propose amendments.",
    related: "Constitution, Charter Change"
},
{
    term: "Martial Law",
    category: "Constitutional Law",
    definition: "A temporary measure where military authority is used under constitutional limits during emergencies.",
    simple: "Special powers used during serious emergencies.",
    example: "The Constitution limits the use of martial law.",
    related: "Commander-in-Chief, Constitution, National Security"
},
{
    term: "Constitutionality",
    category: "Constitutional Law",
    definition: "Whether a law or government action follows the Constitution.",
    simple: "Whether something is constitutional.",
    example: "The Supreme Court reviews constitutionality.",
    related: "Judicial Review, Constitution"
},
{
    term: "Constitutional Interpretation",
    category: "Constitutional Law",
    definition: "The process of explaining the meaning of constitutional provisions.",
    simple: "Understanding what the Constitution means.",
    example: "The Supreme Court interprets constitutional provisions.",
    related: "Judicial Review, Constitution"
},
{
    term: "Legislative Power",
    category: "Constitutional Law",
    definition: "The authority to make laws.",
    simple: "The power to create laws.",
    example: "Congress exercises legislative power.",
    related: "Congress, Legislature, Separation of Powers"
},
{
    term: "Executive Power",
    category: "Constitutional Law",
    definition: "The authority to enforce and implement laws.",
    simple: "The power to carry out laws.",
    example: "The President exercises executive power.",
    related: "Executive, President, Government"
},
{
    term: "Judicial Power",
    category: "Constitutional Law",
    definition: "The authority to interpret laws and settle legal disputes.",
    simple: "The power of the courts.",
    example: "The Supreme Court exercises judicial power.",
    related: "Judiciary, Judicial Review"
},
{
    term: "Commander-in-Chief",
    category: "Constitutional Law",
    definition: "The constitutional role of the President as head of the Armed Forces.",
    simple: "The President leads the military.",
    example: "The President serves as Commander-in-Chief.",
    related: "President, Martial Law"
},
{
    term: "Constitutional Supremacy",
    category: "Constitutional Law",
    definition: "The principle that the Constitution is the highest law of the land.",
    simple: "The Constitution is above all laws.",
    example: "Laws inconsistent with the Constitution are invalid.",
    related: "Constitution, Rule of Law"
},
{
    term: "Constitutional Government",
    category: "Constitutional Law",
    definition: "A government whose powers are limited by the Constitution.",
    simple: "Government follows the Constitution.",
    example: "The Philippines has a constitutional government.",
    related: "Constitution, Constitutionalism"
},
{
    term: "Constitutional Crisis",
    category: "Constitutional Law",
    definition: "A situation where constitutional rules are challenged or unclear.",
    simple: "A serious conflict involving the Constitution.",
    example: "Conflicting claims of authority may create a constitutional crisis.",
    related: "Constitution, Government"
},
{
    term: "Constitutional Remedy",
    category: "Constitutional Law",
    definition: "A legal remedy provided by the Constitution to protect rights.",
    simple: "A legal solution provided by the Constitution.",
    example: "Citizens may seek constitutional remedies for rights violations.",
    related: "Bill of Rights, Due Process"
},
{
    term: "Constitutional Duty",
    category: "Constitutional Law",
    definition: "An obligation imposed by the Constitution on government officials or citizens.",
    simple: "A responsibility required by the Constitution.",
    example: "Officials must uphold the Constitution.",
    related: "Constitution, Public Office"
},
{
    term: "Constitutional Guarantee",
    category: "Constitutional Law",
    definition: "A protection or promise provided by the Constitution.",
    simple: "A right protected by the Constitution.",
    example: "Freedom of expression is a constitutional guarantee.",
    related: "Bill of Rights, Constitution"
},
{
    term: "Political Regime",
    category: "Comparative Politics",
    definition: "The form or system by which a country is governed.",
    simple: "A country's system of government.",
    example: "Democracy and authoritarianism are different political regimes.",
    related: "Government, Democracy, Authoritarianism"
},
{
    term: "Regime Change",
    category: "Comparative Politics",
    definition: "The replacement of one political regime by another.",
    simple: "Changing one government system to another.",
    example: "Some countries experienced regime change after revolutions.",
    related: "Revolution, Democracy, Political System"
},
{
    term: "Democratic Consolidation",
    category: "Comparative Politics",
    definition: "The process of making democracy stable and long-lasting.",
    simple: "Strengthening democracy.",
    example: "Free elections help democratic consolidation.",
    related: "Democracy, Political Stability, Rule of Law"
},
{
    term: "Political Transition",
    category: "Comparative Politics",
    definition: "The movement from one political system to another.",
    simple: "Changing political systems.",
    example: "Spain experienced political transition after dictatorship.",
    related: "Regime Change, Democracy, Reform"
},
{
    term: "Political Institution",
    category: "Comparative Politics",
    definition: "An organization or structure that performs political functions.",
    simple: "Organizations that help run government.",
    example: "Congress is a political institution.",
    related: "Government, Legislature, Judiciary"
},
{
    term: "Political Cleavage",
    category: "Comparative Politics",
    definition: "A social division that influences political behavior.",
    simple: "Differences that divide voters.",
    example: "Religion may become a political cleavage.",
    related: "Political Party, Voting Behavior, Society"
},
{
    term: "Party System",
    category: "Comparative Politics",
    definition: "The way political parties are organized and compete in a country.",
    simple: "How political parties compete.",
    example: "The Philippines has a multi-party system.",
    related: "Political Party, Elections, Democracy"
},
{
    term: "One-Party System",
    category: "Comparative Politics",
    definition: "A political system where only one party is legally allowed to govern.",
    simple: "Only one political party is allowed.",
    example: "China has a one-party system.",
    related: "Political Party, Authoritarianism"
},
{
    term: "Two-Party System",
    category: "Comparative Politics",
    definition: "A system where two major parties dominate elections.",
    simple: "Two parties dominate politics.",
    example: "The United States has a two-party system.",
    related: "Political Party, Elections"
},
{
    term: "Multi-Party System",
    category: "Comparative Politics",
    definition: "A political system with several competing political parties.",
    simple: "Many parties compete in elections.",
    example: "The Philippines has a multi-party system.",
    related: "Political Party, Democracy"
},
{
    term: "Unitary State",
    category: "Comparative Politics",
    definition: "A country where political power is mainly held by the national government.",
    simple: "Power is mostly centralized.",
    example: "The Philippines is a unitary state.",
    related: "Federalism, Government"
},
{
    term: "Parliamentary System",
    category: "Comparative Politics",
    definition: "A system where the executive comes from the legislature.",
    simple: "The Prime Minister comes from Parliament.",
    example: "The United Kingdom has a parliamentary system.",
    related: "Presidential System, Legislature"
},
{
    term: "Presidential System",
    category: "Comparative Politics",
    definition: "A system where the President serves as both head of state and head of government.",
    simple: "The President leads the executive branch.",
    example: "The Philippines has a presidential system.",
    related: "Executive, Government"
},
{
    term: "Political Opposition",
    category: "Comparative Politics",
    definition: "Parties or groups that challenge the government.",
    simple: "Groups that disagree with the government.",
    example: "The opposition criticized the proposed law.",
    related: "Political Party, Democracy"
},
{
    term: "Coalition Government",
    category: "Comparative Politics",
    definition: "A government formed by two or more political parties.",
    simple: "Several parties govern together.",
    example: "Coalition governments are common in parliamentary systems.",
    related: "Political Party, Parliament"
},
{
    term: "Minority Government",
    category: "Comparative Politics",
    definition: "A government that does not control a majority of seats in the legislature.",
    simple: "The ruling party has less than half the seats.",
    example: "Minority governments often seek coalition support.",
    related: "Parliament, Coalition Government"
},
{
    term: "Majority Government",
    category: "Comparative Politics",
    definition: "A government that holds more than half of the legislative seats.",
    simple: "The ruling party has most seats.",
    example: "Majority governments usually pass laws more easily.",
    related: "Legislature, Parliament"
},
{
    term: "Political Opposition Party",
    category: "Comparative Politics",
    definition: "A political party that is not part of the ruling government.",
    simple: "A party not in power.",
    example: "The opposition party questioned the administration's policies.",
    related: "Political Party, Democracy"
},
{
    term: "Comparative Analysis",
    category: "Comparative Politics",
    definition: "The comparison of political systems to identify similarities and differences.",
    simple: "Comparing governments.",
    example: "Students compare the Philippines and Japan in Comparative Politics.",
    related: "Comparative Politics, Political System"
},
{
    term: "Developing Country",
    category: "Comparative Politics",
    definition: "A country with a growing economy and improving institutions.",
    simple: "A country still developing.",
    example: "The Philippines is considered a developing country.",
    related: "Economic Development"
},
{
    term: "Developed Country",
    category: "Comparative Politics",
    definition: "A country with a highly developed economy and institutions.",
    simple: "A highly developed nation.",
    example: "Japan is a developed country.",
    related: "Economic Development"
},
{
    term: "Civil Liberty",
    category: "Human Rights & Civil Liberties",
    definition: "A fundamental freedom protected from government interference.",
    simple: "Basic freedoms protected by law.",
    example: "Freedom of speech is a civil liberty.",
    related: "Human Rights, Bill of Rights, Liberty"
},
{
    term: "Civil Rights",
    category: "Human Rights & Civil Liberties",
    definition: "Rights that protect people from discrimination and ensure equal treatment.",
    simple: "Rights that guarantee equal treatment.",
    example: "Voting rights are civil rights.",
    related: "Equality, Human Rights, Constitution"
},
{
    term: "Natural Rights",
    category: "Human Rights & Civil Liberties",
    definition: "Rights believed to belong to every person simply because they are human.",
    simple: "Rights people have by birth.",
    example: "John Locke believed in natural rights.",
    related: "Human Rights, Liberty, Equality"
},
{
    term: "Fundamental Rights",
    category: "Human Rights & Civil Liberties",
    definition: "Basic rights guaranteed by the Constitution.",
    simple: "The most important rights protected by law.",
    example: "Freedom of religion is a fundamental right.",
    related: "Bill of Rights, Constitution"
},
{
    term: "Equality Before the Law",
    category: "Human Rights & Civil Liberties",
    definition: "The principle that all people are treated equally under the law.",
    simple: "Everyone is equal under the law.",
    example: "Government officials are also subject to the law.",
    related: "Equal Protection, Justice"
},
{
    term: "Freedom of Assembly",
    category: "Human Rights & Civil Liberties",
    definition: "The right of people to gather peacefully for lawful purposes.",
    simple: "The right to hold peaceful gatherings.",
    example: "Citizens may hold peaceful protests.",
    related: "Freedom of Speech, Democracy"
},
{
    term: "Freedom of Association",
    category: "Human Rights & Civil Liberties",
    definition: "The right to join organizations or groups.",
    simple: "The right to join groups.",
    example: "Workers may join labor unions.",
    related: "Civil Society, Political Party"
},
{
    term: "Freedom of the Press",
    category: "Human Rights & Civil Liberties",
    definition: "The right of the media to report news without censorship.",
    simple: "The media can report freely.",
    example: "A free press strengthens democracy.",
    related: "Freedom of Expression, Mass Media"
},
{
    term: "Freedom of Expression",
    category: "Human Rights & Civil Liberties",
    definition: "The right to express ideas and opinions freely.",
    simple: "The right to share opinions.",
    example: "Writing editorials is protected by freedom of expression.",
    related: "Freedom of Speech"
},
{
    term: "Right to Information",
    category: "Human Rights & Civil Liberties",
    definition: "The right of citizens to access government information.",
    simple: "People can request public information.",
    example: "Citizens may request government records.",
    related: "Transparency, Accountability"
},
{
    term: "Right to Education",
    category: "Human Rights & Civil Liberties",
    definition: "The right of every person to receive education.",
    simple: "Everyone has the right to learn.",
    example: "Public education supports this right.",
    related: "Human Rights"
},
{
    term: "Right to Health",
    category: "Human Rights & Civil Liberties",
    definition: "The right to access healthcare services.",
    simple: "Everyone deserves healthcare.",
    example: "Government hospitals support this right.",
    related: "Human Rights"
},
{
    term: "Right to Life",
    category: "Human Rights & Civil Liberties",
    definition: "The right of every person to live and be protected by law.",
    simple: "Everyone has the right to live.",
    example: "The Constitution protects the right to life.",
    related: "Human Rights"
},
{
    term: "Right to Property",
    category: "Human Rights & Civil Liberties",
    definition: "The right to own and use property legally.",
    simple: "People can own property.",
    example: "Land ownership is protected by law.",
    related: "Property Rights"
},
{
    term: "Right to Vote",
    category: "Human Rights & Civil Liberties",
    definition: "The right of qualified citizens to participate in elections.",
    simple: "The right to vote.",
    example: "Citizens exercise this right during elections.",
    related: "Suffrage, Democracy"
},
{
    term: "Minority Rights",
    category: "Human Rights & Civil Liberties",
    definition: "Rights protecting minority groups from discrimination.",
    simple: "Rights that protect minority groups.",
    example: "Minority rights promote equality.",
    related: "Equality, Human Rights"
},
{
    term: "Women's Rights",
    category: "Human Rights & Civil Liberties",
    definition: "Rights promoting equality and protection for women.",
    simple: "Rights that protect women.",
    example: "Equal employment opportunities support women's rights.",
    related: "Gender Equality"
},
{
    term: "Children's Rights",
    category: "Human Rights & Civil Liberties",
    definition: "Rights protecting the welfare and development of children.",
    simple: "Rights that protect children.",
    example: "Education is one of children's rights.",
    related: "Human Rights"
},
{
    term: "Labor Rights",
    category: "Human Rights & Civil Liberties",
    definition: "Rights protecting workers and their working conditions.",
    simple: "Rights of employees.",
    example: "Minimum wage laws support labor rights.",
    related: "Freedom of Association"
},
{
    term: "Right to Due Process",
    category: "Human Rights & Civil Liberties",
    definition: "The right to fair legal procedures before government action.",
    simple: "Everyone deserves a fair legal process.",
    example: "The accused must receive a fair trial.",
    related: "Due Process"
},
{
    term: "Right Against Self-Incrimination",
    category: "Human Rights & Civil Liberties",
    definition: "The right not to be forced to testify against oneself.",
    simple: "You cannot be forced to admit guilt.",
    example: "An accused may remain silent during questioning.",
    related: "Bill of Rights"
},
{
    term: "Right to Counsel",
    category: "Human Rights & Civil Liberties",
    definition: "The right to be assisted by a lawyer.",
    simple: "The right to have a lawyer.",
    example: "The accused requested legal counsel.",
    related: "Due Process"
},
{
    term: "Freedom from Discrimination",
    category: "Human Rights & Civil Liberties",
    definition: "The right to equal treatment regardless of personal characteristics.",
    simple: "No unfair treatment.",
    example: "Employment discrimination is prohibited.",
    related: "Equality"
},
{
    term: "Human Dignity",
    category: "Human Rights & Civil Liberties",
    definition: "The inherent worth and value of every human being.",
    simple: "Every person deserves respect.",
    example: "Human dignity is protected by human rights.",
    related: "Human Rights"
},
{
    term: "Universal Declaration of Human Rights",
    category: "Human Rights & Civil Liberties",
    definition: "A United Nations document recognizing the basic rights of all people.",
    simple: "A global list of basic human rights.",
    example: "The UDHR was adopted in 1948.",
    related: "United Nations, Human Rights"
},
{
    term: "Candidate",
    category: "Elections & Political Parties",
    definition: "A person seeking election to public office.",
    simple: "A person running for office.",
    example: "Each candidate presented a campaign platform.",
    related: "Election, Campaign"
},
{
    term: "Incumbent",
    category: "Elections & Political Parties",
    definition: "The current holder of a public office.",
    simple: "The official currently in office.",
    example: "The incumbent mayor ran for reelection.",
    related: "Election"
},
{
    term: "Campaign",
    category: "Elections & Political Parties",
    definition: "Activities conducted to gain public support before an election.",
    simple: "Promoting a candidate before voting.",
    example: "Campaign rallies were held nationwide.",
    related: "Election"
},
{
    term: "Campaign Platform",
    category: "Elections & Political Parties",
    definition: "A candidate's plans and promises if elected.",
    simple: "A candidate's proposed programs.",
    example: "Education was part of the campaign platform.",
    related: "Candidate"
},
{
    term: "Campaign Promise",
    category: "Elections & Political Parties",
    definition: "A commitment made by a candidate during a campaign.",
    simple: "A promise made to voters.",
    example: "Reducing taxes was a campaign promise.",
    related: "Campaign Platform"
},
{
    term: "Ballot",
    category: "Elections & Political Parties",
    definition: "The paper or electronic form used to cast a vote.",
    simple: "The form used to vote.",
    example: "The voter completed the ballot.",
    related: "Election, Voting"
},
{
    term: "Secret Ballot",
    category: "Elections & Political Parties",
    definition: "A voting method that keeps a person's vote private.",
    simple: "No one knows who you voted for.",
    example: "The Philippines uses the secret ballot.",
    related: "Voting"
},
{
    term: "Polling Place",
    category: "Elections & Political Parties",
    definition: "The location where voters cast their ballots.",
    simple: "The place where people vote.",
    example: "The school served as the polling place.",
    related: "Election"
},
{
    term: "Voter Registration",
    category: "Elections & Political Parties",
    definition: "The process of enrolling as an eligible voter.",
    simple: "Signing up to vote.",
    example: "COMELEC opened voter registration.",
    related: "Election"
},
{
    term: "Registered Voter",
    category: "Elections & Political Parties",
    definition: "A person officially qualified to vote.",
    simple: "A person allowed to vote.",
    example: "Only registered voters may vote.",
    related: "Suffrage"
},
{
    term: "Election Campaign",
    category: "Elections & Political Parties",
    definition: "The official campaign period before an election.",
    simple: "The time when candidates campaign.",
    example: "Campaigning begins after the official period starts.",
    related: "Campaign"
},
{
    term: "Election Day",
    category: "Elections & Political Parties",
    definition: "The day when citizens cast their votes.",
    simple: "The official voting day.",
    example: "Election Day is declared a holiday.",
    related: "Voting"
},
{
    term: "Election Returns",
    category: "Elections & Political Parties",
    definition: "The official record of votes counted in a precinct.",
    simple: "The official vote count.",
    example: "Election returns were transmitted electronically.",
    related: "Vote Counting"
},
{
    term: "Vote Counting",
    category: "Elections & Political Parties",
    definition: "The process of counting votes cast in an election.",
    simple: "Counting the votes.",
    example: "Vote counting started after polls closed.",
    related: "Election Returns"
},
{
    term: "Election Protest",
    category: "Elections & Political Parties",
    definition: "A legal challenge to election results.",
    simple: "Questioning election results.",
    example: "The losing candidate filed an election protest.",
    related: "Election"
},
{
    term: "Electoral Fraud",
    category: "Elections & Political Parties",
    definition: "Illegal acts intended to influence election results.",
    simple: "Cheating in elections.",
    example: "Vote buying is electoral fraud.",
    related: "Vote Buying"
},
{
    term: "Election Observer",
    category: "Elections & Political Parties",
    definition: "A person who monitors elections to ensure fairness.",
    simple: "Someone who watches elections.",
    example: "International observers monitored the elections.",
    related: "Election"
},
{
    term: "Independent Candidate",
    category: "Elections & Political Parties",
    definition: "A candidate not affiliated with any political party.",
    simple: "A candidate without a political party.",
    example: "An independent candidate won the election.",
    related: "Political Party"
},
{
    term: "Running Mate",
    category: "Elections & Political Parties",
    definition: "A candidate who runs together with another candidate.",
    simple: "A teammate in an election.",
    example: "The vice-presidential candidate is the presidential running mate.",
    related: "Election"
},
{
    term: "Election Manifesto",
    category: "Elections & Political Parties",
    definition: "A written statement of a party's policies and goals.",
    simple: "A party's official promises.",
    example: "The manifesto focused on education reform.",
    related: "Political Party"
},
{
    term: "Swing Voter",
    category: "Elections & Political Parties",
    definition: "A voter who has not firmly decided which candidate to support.",
    simple: "A voter who may change their choice.",
    example: "Candidates targeted swing voters during debates.",
    related: "Voting Behavior"
},
{
    term: "Straight Ticket Voting",
    category: "Elections & Political Parties",
    definition: "Voting for candidates from only one political party.",
    simple: "Voting for one party only.",
    example: "Some voters prefer straight ticket voting.",
    related: "Political Party"
},
{
    term: "Split-Ticket Voting",
    category: "Elections & Political Parties",
    definition: "Voting for candidates from different political parties.",
    simple: "Voting for candidates from different parties.",
    example: "Split-ticket voting is common in some elections.",
    related: "Voting Behavior"
},
{
    term: "Political Coalition",
    category: "Elections & Political Parties",
    definition: "An alliance of political parties for elections or governance.",
    simple: "Political parties working together.",
    example: "Several parties formed a coalition.",
    related: "Political Party"
},
{
    term: "Party Membership",
    category: "Elections & Political Parties",
    definition: "Being officially affiliated with a political party.",
    simple: "Belonging to a political party.",
    example: "Party membership requires registration.",
    related: "Political Party"
},
{
    term: "Party Loyalty",
    category: "Elections & Political Parties",
    definition: "Continued support for the same political party.",
    simple: "Staying loyal to one party.",
    example: "Party loyalty influenced voting decisions.",
    related: "Political Party"
},
{
    term: "Election Commission",
    category: "Elections & Political Parties",
    definition: "The government body responsible for administering elections.",
    simple: "The agency that manages elections.",
    example: "COMELEC is the election commission of the Philippines.",
    related: "COMELEC, Election"
},
{
    term: "Barangay Tanod",
    category: "Philippine Government",
    definition: "A community peacekeeping volunteer who assists in maintaining peace, order, and public safety within the barangay.",
    simple: "A volunteer who helps keep peace and order in the barangay.",
    example: "Barangay tanods patrol the community and assist during emergencies.",
    related: "Barangay, Punong Barangay, Katarungang Pambarangay"
},
{
    term: "Barangay Assembly",
    category: "Philippine Government",
    definition: "A gathering of barangay residents where officials report accomplishments and discuss community concerns.",
    simple: "A meeting of barangay officials and residents.",
    example: "Residents attended the Barangay Assembly to discuss local projects.",
    related: "Barangay, Local Government, Citizen Participation"
},
{
    term: "Lupon Tagapamayapa",
    category: "Philippine Government",
    definition: "A barangay body responsible for settling disputes through mediation before cases reach the courts.",
    simple: "A group that helps settle conflicts in the barangay.",
    example: "Neighbors first brought their dispute to the Lupon Tagapamayapa.",
    related: "Katarungang Pambarangay, Barangay, Mediation"
},
{
    term: "Katarungang Pambarangay",
    category: "Philippine Government",
    definition: "The barangay justice system that resolves disputes through mediation and conciliation before court action.",
    simple: "The barangay system for settling conflicts peacefully.",
    example: "Minor disputes are usually handled through Katarungang Pambarangay.",
    related: "Lupon Tagapamayapa, Mediation, Barangay"
},
{
    term: "State Sovereignty",
    category: "International Relations",
    definition: "The principle that every state has supreme authority over its own territory and internal affairs.",
    simple: "A country governs itself without outside interference.",
    example: "The UN respects the state sovereignty of its members.",
    related: "Sovereignty, State, International Law"
},
{
    term: "Diplomatic Immunity",
    category: "International Relations",
    definition: "The protection given to diplomats from prosecution under the laws of the country where they are assigned.",
    simple: "Diplomats have legal protection while serving abroad.",
    example: "Embassy officials are protected by diplomatic immunity.",
    related: "Diplomacy, Ambassador, Embassy"
},
{
    term: "International Cooperation",
    category: "International Relations",
    definition: "The process by which countries work together to address common global issues.",
    simple: "Countries help each other solve problems.",
    example: "Climate change requires international cooperation.",
    related: "United Nations, Diplomacy, Multilateralism"
}
    
];

const dictionaryContainer = document.getElementById("dictionaryContainer");
const dictionarySearch = document.getElementById("dictionarySearch");
const categoryButtons = document.querySelectorAll(".dict-category");
const alphabetButtons = document.querySelectorAll(".alphabet-btn");

let currentCategory = "All";
let currentLetter = "All";

function getSavedTerms() {
    return JSON.parse(localStorage.getItem("savedTerms")) || [];
}

function isTermSaved(term) {
    return getSavedTerms().some(item => item.term === term);
}

function saveDictionaryTerm(term) {
    const selectedTerm = politicalDictionary.find(item => item.term === term);
    let savedTerms = getSavedTerms();

    if (!selectedTerm) return;

    if (isTermSaved(term)) {
        savedTerms = savedTerms.filter(item => item.term !== term);
    } else {
        savedTerms.push(selectedTerm);
    }

    localStorage.setItem("savedTerms", JSON.stringify(savedTerms));
    displayDictionaryTerms();
}

function displayDictionaryTerms() {
    const searchText = dictionarySearch.value.toLowerCase();

    const filteredTerms = politicalDictionary
        .filter(item => {
            const matchesSearch =
                item.term.toLowerCase().includes(searchText) ||
                item.category.toLowerCase().includes(searchText) ||
                item.definition.toLowerCase().includes(searchText) ||
                item.simple.toLowerCase().includes(searchText) ||
                item.example.toLowerCase().includes(searchText) ||
                item.related.toLowerCase().includes(searchText);

            const matchesCategory =
                currentCategory === "All" ||
                item.category === currentCategory;

            const matchesLetter =
                currentLetter === "All" ||
                item.term.charAt(0).toUpperCase() === currentLetter;

            return matchesSearch && matchesCategory && matchesLetter;
        })
        .sort((a, b) => a.term.localeCompare(b.term));

    if (filteredTerms.length === 0) {
        dictionaryContainer.innerHTML = `
            <div class="dictionary-card empty-saved-card">
                <h3>No terms found.</h3>
                <p>Try searching another political, legal, constitutional, or governance term.</p>
            </div>
        `;
        return;
    }

    dictionaryContainer.innerHTML = filteredTerms.map(item => {
        const saved = isTermSaved(item.term);

        return `
            <div class="dictionary-card">
                <span class="dict-badge">${item.category}</span>
                <h3>${item.term}</h3>
                <p><strong>Definition:</strong> ${item.definition}</p>
                <p><strong>Simple Meaning:</strong> ${item.simple}</p>
                <p><strong>Example:</strong> ${item.example}</p>
                <p><strong>Related Terms:</strong> ${item.related}</p>

                <button class="dict-save-btn ${saved ? "saved" : ""}" onclick="saveDictionaryTerm('${item.term}')">
                    ${saved ? "✅ Saved" : "❤️ Save Term"}
                </button>
            </div>
        `;
    }).join("");
}

dictionarySearch.addEventListener("input", displayDictionaryTerms);

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentCategory = button.dataset.category;
        displayDictionaryTerms();
    });
});

alphabetButtons.forEach(button => {
    button.addEventListener("click", () => {
        alphabetButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentLetter = button.dataset.letter;
        displayDictionaryTerms();
    });
});

displayDictionaryTerms();