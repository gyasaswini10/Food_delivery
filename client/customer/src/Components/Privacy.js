import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 

function Privacy() {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We Delight Zone value your privacy and are committed to protecting your personal data. 
          This Privacy Policy explains how we collect, use, and safeguard your information when you use our food delivery platform.
        </Typography>

        {/* Information Collection */}
        <Typography variant="h5" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect the following types of information:
          <ul>
            <li><strong>Personal Information:</strong> Your name, email address, phone number, delivery address, and payment information when you place an order.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, and activity on our platform for analytics and improving user experience.</li>
            <li><strong>Cookies:</strong> We use cookies to remember your preferences and analyze traffic.</li>
          </ul>
        </Typography>

        {/* Use of Information */}
        <Typography variant="h5" gutterBottom>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the information we collect to:
          <ul>
            <li>Process orders and payments</li>
            <li>Provide real-time order tracking</li>
            <li>Send notifications about your orders</li>
            <li>Improve the platform's user experience</li>
            <li>Respond to customer support inquiries</li>
          </ul>
        </Typography>

        {/* Data Sharing */}
        <Typography variant="h5" gutterBottom>
          Sharing of Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We do not sell your personal information. However, we may share your data with:
          <ul>
            <li>Third-party service providers (e.g., payment processors, delivery partners)</li>
            <li>Authorities, if required by law to comply with legal obligations</li>
          </ul>
        </Typography>

        {/* Cookies */}
        <Typography variant="h5" gutterBottom>
          Cookies and Tracking
        </Typography>
        <Typography variant="body1" paragraph>
          We use cookies to remember your preferences and track your activity on the platform to improve performance. You can control your cookie preferences through your browser settings.
        </Typography>

        {/* Data Security */}
        <Typography variant="h5" gutterBottom>
          Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, or loss.
        </Typography>

        {/* User Rights */}
        <Typography variant="h5" gutterBottom>
          Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to:
          <ul>
            <li>Access, update, or delete your personal data</li>
            <li>Withdraw consent to the use of your data</li>
            <li>Request a copy of the data we hold about you</li>
          </ul>
          To exercise any of these rights, contact us at privacy@fooddelivery.com.
        </Typography>

        {/* Third-Party Links */}
        <Typography variant="h5" gutterBottom>
          Third-Party Links
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites, and we encourage you to review their policies.
        </Typography>

        {/* Children's Privacy */}
        <Typography variant="h5" gutterBottom>
          Children's Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          Our services are not intended for users under the age of 13, and we do not knowingly collect personal data from children. If you believe that a child has provided us with personal information, please contact us to have the data removed.
        </Typography>

        {/* Policy Updates */}
        <Typography variant="h5" gutterBottom>
          Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on this page with the updated date.
        </Typography>

        {/* Contact Us with Warning Button */}
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or concerns regarding this Privacy Policy, feel free to reach out to us through our contact page.
        </Typography>
        <Button 
          variant="contained" 
          color="warning" 
          component={Link} 
          to="/contact" 
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}

export default Privacy;
