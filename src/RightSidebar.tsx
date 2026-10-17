import { Pill, Text } from "@tantuui/react";

const technicalGroups = [
  ["Frontend Technologies", "React.js · Angular · AngularJS · Next.js · Vue.js · JavaScript · Redux · TypeScript · Leaflet · ES6 · HTML5 · CSS3 · jQuery · Bootstrap"],
  ["UI Libraries & Styling", "Ant Design · Leaflet · Yup · Axios · Tailwind CSS · Material Design · Nebular · Reusable UI Components · Design Tokens · Component Libraries"],
  ["Frontend Architecture", "Microfrontend Architecture · Component-Based Architecture · Frontend Modernization · Reusable Libraries"],
  ["Authentication & Security", "Keycloak · Single Sign-On (SSO) · OpenID Connect (OIDC) · OAuth 2.0 · Access-Token Management · Refresh Tokens · Session Monitoring"],
  ["API Integration", "REST APIs · Asynchronous Operations · Frontend–Backend Integration · Error Handling"],
  ["Data Visualization", "Highcharts · NVD3 · KPI Dashboards · Interactive Charts · Data Tables"],
  ["Logistics & Geospatial", "Transport Management Systems (TMS) · Fleet Management · Dock Utilization · Waybill Tracking · Geospatial Visualization · Serviceability Mapping"],
  ["AI-Related Exposure", "AI-Based Design Workflows through the Tarmac Design System project"],
  ["Additional Engineering", "Performance Optimization · Cross-Browser Compatibility · Responsive Web Design · Code Reviews · Testing · Production Support"],
];

function RightSidebar() {
  return (
    <aside className="app-rightbar" aria-label="Profile details">
      <section className="rightbar__section">
        <Text as="span" size="xs" weight="bold" color="primary" className="rightbar__eyebrow">Education</Text>
        <h2>Bachelor of Computer Applications</h2>
        <p>Baba Saheb Bhim Rao Ambedkar University</p>
        <Text as="span" size="xs" color="secondary">2010 · 76.54%</Text>
      </section>

      <section className="rightbar__section" id="skills">
        <Text as="span" size="xs" weight="bold" color="primary" className="rightbar__eyebrow">Technical</Text>
        <div className="rightbar__technical-groups">{technicalGroups.map(([label, value]) => <div key={label}><strong>{label}</strong><p>{value}</p></div>)}</div>
      </section>

      <section className="rightbar__section">
        <Text as="span" size="xs" weight="bold" color="primary" className="rightbar__eyebrow">Key impact</Text>
        <div className="rightbar__impact"><Pill label="11+ years" intent="primary" variant="subtle" size="sm" /><Pill label="70% efficiency gain" intent="success" variant="subtle" size="sm" /><Pill label="25+ apps" intent="info" variant="subtle" size="sm" /></div>
      </section>

    </aside>
  );
}

export default RightSidebar;
