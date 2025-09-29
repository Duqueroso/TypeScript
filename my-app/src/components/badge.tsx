import React from 'react'

interface badgeProps{
    text?: "Disponible" | "Agotado" | "Nuevo";
    status?: "success" | "error" | "warning" | "info" | "default";
    icon?: React.ReactNode;


}

export const Badge = ({text, status = "default"}:badgeProps) => {
  return (
    <div className=
        {` componente-badge 
        ${text === "Disponible" ? "Disponible" :
        text === "Agotado" ? "Agotado" :
        text === "Nuevo" ? "Nuevo" : "Default"}
        `}>
        
        <div>
            
        </div>

    </div>
  )
}
