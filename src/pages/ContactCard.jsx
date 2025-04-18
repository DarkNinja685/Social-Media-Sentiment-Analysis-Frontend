import React from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactCard = () => {
  return (
    <Card className="p-4 shadow-sm border rounded">
      <h3 className="text-lg font-bold mb-3">Contact Us</h3>
      <div className="d-flex align-items-center mb-2">
        <Mail className="me-2" />
        <span>support@example.com</span>
      </div>
      <div className="d-flex align-items-center mb-3">
        <Phone className="me-2" />
        <span>+1 (555) 123-4567</span>
      </div>
      <Button>Send a Message</Button>
    </Card>
  );
};

export default ContactCard;
