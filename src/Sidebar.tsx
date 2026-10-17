import { Text } from "@tantuui/react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && <button type="button" className="sidebar__scrim" aria-label="Close profile panel" onClick={onClose} />}
      <aside className={`app-sidebar${open ? " app-sidebar--open" : ""}`} aria-label="Pawan Kumar profile">
        <button type="button" className="sidebar__close" onClick={onClose} aria-label="Close profile panel">×</button>
        <div className="sidebar__profile">
          <Text as="span" size="lg" className="sidebar__name">Pawan Kumar</Text>
          <Text as="span" size="md" className="sidebar__role">Senior Frontend Developer</Text>
          <Text as="span" size="xs" className="sidebar__specialism">Frontend Architecture · UI Engineering · Technical Leadership</Text>
          <Text as="span" size="2xs" className="sidebar__specialism">Driving scalable frontend engineering, modern UI architecture, and enterprise application modernization across product-based organizations, IT services, logistics, e-commerce, & SaaS environments, with a focus on reusable component ecosystems, high-performance web applications, design systems, & technical leadership.</Text>
        </div>
        <div className="sidebar__footer sidebar__contact-details">
          <Text as="span" size="xs" weight="bold" className="sidebar__label">Contact</Text>
          <div className="sidebar__contact-card">
            <a href="mailto:pawanjee.srkg@gmail.com">pawanjee.srkg@gmail.com</a>
            <Text as="span" size="xs">+91 8130173033 / +91 9716481062 </Text>
            <a href="https://www.linkedin.com/in/pawan-mishra-567a0380/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <Text as="p" size="xs" className="sidebar__location">A-84, UGF, Paryavaran Complex<br />Saket, Delhi — 110030</Text>
        </div>
        <div className="sidebar__footer sidebar__availability">
          <Text as="span" size="xs" weight="bold" className="sidebar__label">Open to opportunities</Text>
          <Text as="p" size="xs" className="sidebar__location">Logistics · E-commerce · SaaS<br />React · Angular · Design Systems</Text>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
