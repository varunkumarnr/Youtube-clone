import React from 'react'
import './SidebarRow.css'
function SidebarRow({selected,Icon,title}) {
    return (
        <div className = {`sidebarRow ${selected&&"selected"}`}>
            <div className = "sidebarRow">
            <Icon className='sidebarRow-Icon '/>
            <h2 className="sidebarRow-title">{title}</h2>
           </div>
        </div>
    )
}
export default SidebarRow
