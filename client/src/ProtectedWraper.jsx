import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedWrapper({ children }) {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        const verifyToken = async () => {
            try {
                const response = await axios.get("http://localhost:3000/", {
                    headers: {
                        Authorization: `${token}`,
                    },
                });

                if (response.status !== 200) {
                    navigate("/login");
                }
            } catch (err) {
                navigate("/login");
            }
        };

        verifyToken();
    }, [token, navigate]);

    return <>{children}</>;
}
