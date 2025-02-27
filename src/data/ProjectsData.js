import output from '../images/output.png';
import authenticationSystem from '../images/Authentication_System.png';
import routingApi from '../images/routing-api.png';

export const projectsData = [
    {
        id: 1,
        image: 'https://pvs.woah.org/assets/icons/EN-DIAGRAM.jpg',
        name: 'WOAH - PVSIS',
        description: 'The Performance of Veterinary Services (PVS) Pathway, WOAH’s flagship capacity building programme for the sustainable improvement of national Veterinary Services and Aquatic Animal Health Services, has transformed into the PVS Information System. Through the PVSIS, WOAH has unlocked the data and insights contained in PVS Reports to allow more effective advocacy efforts for investment and sustainable funding and a deeper understanding of performance trends towards compliance with WOAH International Standards.',
        url: 'https://pvs.woah.org/',
        status: 'Stage 1 Deployed - Stage 2 in Progress',
        technologies: 'React.js, Node.js, MSSQL, Microsoft Azure, K8',
        short_description: <li>The <strong>PVS Information System (PVSIS)</strong>, part of <strong>WOAH’s</strong> flagship PVS Pathway, enhances national Veterinary and Aquatic Animal Health Services by providing accessible data and insights from PVS Reports. This system supports effective advocacy for investment, sustainable funding, and a deeper understanding of performance trends in alignment with WOAH International Standards.</li>,
        is_expanded: false,
    },
    {
        id: 2,
        image: 'https://sont-uat.woah.org/assets/icons/people.jpg',
        name: 'WOAH - Standards Online Navigation Tool',
        description: 'The World Organisation for Animal Health (WOAH, founded as OIE) Terrestrial and Aquatic Animal Health Codes provide standards for the improvement of animal health and welfare and veterinary public health worldwide, including through standards for safe international trade in terrestrial and aquatic animals and their products. The manuals provide a standardised approach to the diagnosis of the diseases listed in the Terrestrial and Aquatic Codes.',
        url: 'https://sont-uat.woah.org/',
        status: 'In Progress',
        technologies: 'React.js, Node.js, MSSQL, Microsoft Azure, K8',
        short_description: <li>The <strong>World Organisation for Animal Health (WOAH)</strong>, originally founded as <strong>OIE</strong>, sets global standards for improving animal health, welfare, and veterinary public health. Its <strong>Terrestrial and Aquatic Animal Health Codes</strong> provide guidelines for safe international trade in animals and animal products. Additionally, WOAH manuals offer standardized methods for diagnosing diseases listed in these codes, ensuring consistent and effective disease management worldwide.</li>,
        is_expanded: false,
    }
];

export const otherProjectsData = [
    {
        id: 1,
        image: output,
        name: 'Web Enabled Smart Traffic Congestion System',
        description: 'Smart Traffic Congestion System is a web Application where user ca get prediction of traffic congestion ot specific road on specific date and time. Used technologies are MERN, OpenLayers, OSRM, and Python. Worked as web developer in Digital Distribution Lab(DDL). Code is not public due to organisation privacy policiy',
        url: '',
        is_expanded: false,
    },
    {
        id: 2,
        image: authenticationSystem,
        name: 'Authentication System',
        description: "User Authentication System is build for authentication of users on website. Before visiting site users will login first by providing credintials. If user don't has any account he/she should register first. Used Technologies are MongoDB and Node.js.",
        url: 'https://github.com/TARasti/WebDevelopment/tree/main/Authentication%20System',
        is_expanded: false,
    },
    {
        id: 3,
        image: routingApi,
        name: 'Routing API - Using Google Maps',
        description: `<div>
        <p>This API utilizes Google Maps services to provide two key functionalities for transportation or ride-sharing platforms:</p>
            <ol>
                <li><h5>Find Nearby Drivers/Riders:</h5></li>
                <ul>
                    <li>The API takes the user's current location (latitude and longitude) and searches for nearby drivers or riders within a specified radius (e.g., 5 km).</li>
                    <li>It leverages Google Maps' Places API or Geolocation API to identify the available drivers/riders in the user's vicinity based on real-time location data.</li>
                    <li>Also provides the facility of caching location data.</li>
                </ul>
                <li><h5>Find Shortest Path:</h5></li>
                <ul>
                    <li>This feature computes the shortest route between the user's starting location and their destination.</li>
                    <li>The API integrates with Google Maps' Directions API to calculate the shortest or fastest path, accounting for real-time traffic, road conditions, and user preferences.</li>
                </ul>
            </ol>
        </div>`,
        url: 'https://github.com/TARasti/google-api',
        is_expanded: false,
    },
];

