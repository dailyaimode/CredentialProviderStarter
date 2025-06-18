"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreHorizontal, Mail, Phone, Edit } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@acmecorp.com",
    company: "Acme Corp",
    phone: "+1 (555) 123-4567",
    status: "Active",
    value: "$25,000",
    lastContact: "2 days ago",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@techstart.com",
    company: "TechStart Inc",
    phone: "+1 (555) 234-5678",
    status: "Lead",
    value: "$18,500",
    lastContact: "1 week ago",
  },
  {
    id: 3,
    name: "Mike Davis",
    email: "mike@globalsol.com",
    company: "Global Solutions",
    phone: "+1 (555) 345-6789",
    status: "Active",
    value: "$32,000",
    lastContact: "3 days ago",
  },
  {
    id: 4,
    name: "Lisa Wilson",
    email: "lisa@innovate.com",
    company: "Innovate LLC",
    phone: "+1 (555) 456-7890",
    status: "Inactive",
    value: "$12,000",
    lastContact: "2 weeks ago",
  },
]

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Lead":
        return "bg-blue-100 text-blue-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
            <p className="text-gray-600">Manage your customer relationships</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Directory</CardTitle>
            <CardDescription>Search and manage your customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Customer Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.company}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="mr-1 h-3 w-3" />
                            {customer.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="mr-1 h-3 w-3" />
                            {customer.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(customer.status)}>{customer.status}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">{customer.value}</TableCell>
                      <TableCell className="text-gray-500">{customer.lastContact}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Email
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Phone className="mr-2 h-4 w-4" />
                              Call
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
