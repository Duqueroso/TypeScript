import React, { useState } from 'react'

interface ButtonProps {
    text?: string;
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
    click?: () => void;
    variant?: "primary" | "secondary" | "danger" | "default";
    size?: "small" | "medium" | "large";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = ({text, icon, loading = false, disabled = false, click, variant = "default", size = "medium", leftIcon, rightIcon}: ButtonProps) => {


  return (

    <button className={`boton-componente 
    ${disabled ? "disabled" : ""}
    ${variant === "primary" ? "primary" :
    variant === "secondary" ? "secondary" :
    variant === "danger" ? "danger": ""}
    ${size === "small" ? "small" :
    size === "medium" ? "medium" :
    size === "large" ? "large" : ""}`} 
    onClick={click} 
    disabled={disabled || loading}>
    
        <div>{loading ? "Cargando..." : text}</div>
        <div>{icon}</div>
    </button>
  )
}
