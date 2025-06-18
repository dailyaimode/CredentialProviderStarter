"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, TrendingUp, DollarSign, Target, Phone, Mail, Calendar } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

const metrics = [
  {
    title: "Total Customers",
    value: "2,847",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+8%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-2%",
    changeType: "negative" as const,
    icon: Target,
  },
  {
    title: "Active Deals",
    value: "127",
    change: "+5%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
]

const recentActivities = [
  {
    id: 1,
    type: "call",
    customer: "John Smith",
    action: "Called about pricing",
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "email",
    customer: "Sarah Johnson",
    action: "Sent proposal",
    time: "4 hours ago",
    status: "sent",
  },
  {
    id: 3,
    type: "meeting",
    customer: "Mike Davis",
    action: "Demo scheduled",
    time: "1 day ago",
    status: "scheduled",
  },
  {
    id: 4,
    type: "deal",
    customer: "Lisa Wilson",
    action: "Deal closed - $5,000",
    time: "2 days ago",
    status: "won",
  },
]

const topDeals = [
  {
    id: 1,
    company: "Acme Corp",
    value: "$25,000",
    stage: "Negotiation",
    probability: 75,
    closeDate: "Dec 15, 2024",
  },
  {
    id: 2,
    company: "TechStart Inc",
    value: "$18,500",
    stage: "Proposal",
    probability: 60,
    closeDate: "Dec 20, 2024",
  },
  {
    id: 3,
    company: "Global Solutions",
    value: "$32,000",
    stage: "Discovery",
    probability: 40,
    closeDate: "Jan 10, 2025",
  },
]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className={`text-xs ${metric.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                  {metric.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest customer interactions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {activity.type === "call" && <Phone className="h-5 w-5 text-blue-500" />}
                      {activity.type === "email" && <Mail className="h-5 w-5 text-green-500" />}
                      {activity.type === "meeting" && <Calendar className="h-5 w-5 text-purple-500" />}
                      {activity.type === "deal" && <DollarSign className="h-5 w-5 text-yellow-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.customer}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                    </div>
                    <div className="flex-shrink-0 text-sm text-gray-500">{activity.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Deals */}
          <Card>
            <CardHeader>
              <CardTitle>Top Deals</CardTitle>
              <CardDescription>Your highest value opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topDeals.map((deal) => (
                  <div key={deal.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{deal.company}</p>
                        <p className="text-sm text-gray-500">{deal.stage}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{deal.value}</p>
                        <p className="text-xs text-gray-500">{deal.closeDate}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Probability</span>
                        <span>{deal.probability}%</span>
                      </div>
                      <Progress value={deal.probability} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
