import React from "react";
import AdminProductos from "../components/AdminProductos";


function AdminProductosPage() {
    return (
        <div className="admin-container">
            <h1 className="admin-title">Pasteleria mil Sabores</h1>
            <AdminProductos />
        </div>
    );
}

export default AdminProductosPage;
