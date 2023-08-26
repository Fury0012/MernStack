import React, { useState } from 'react';
import './Tabs.css'; // Create a CSS file for styling

function Tabs({ items }) {
const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index) => {
    setActiveTab(index);
};

return (
    <div className="tabs">
    <div className="tab-headers">
        {items.map((item, index) => (
        <div
            key={index}
            className={`tab-header ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
        >
            {item.label}
        </div>
        ))}
    </div>
    <div className="tab-content">
        {items.map((item, index) => (
        <div
            key={index}
            className={`tab-item ${activeTab === index ? 'active' : ''}`}
        >
            {item.content}
        </div>
        ))}
    </div>
    </div>
);
}

export default Tabs;
