import React from 'react'
import { StepIndicator } from '@/components/blocks/StepIndicator'
import  KeywordCard  from '@/components/blocks/KeywordCard'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function SearchConfigurationPage() {
  const steps = ['Create account', 'Product analysis', 'Keyword & search configuration']

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <StepIndicator steps={steps} currentStep={3} />
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-12">
        <div className="relative">
          <KeywordCard />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-6">Configure your search</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Select platform to track (You can select all)</h2>
              <div className="grid grid-cols-3 gap-2">
                {['Facebook', 'Twitter', 'LinkedIn', 'Reddit', 'Quora', 'Blogs'].map((platform) => (
                  <div key={platform} className="flex items-center space-x-2">
                    <Checkbox id={platform} />
                    <Label htmlFor={platform}>{platform}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Search frequency</h2>
              <RadioGroup defaultValue="realtime">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="realtime" id="realtime" />
                  <Label htmlFor="realtime">Real time</Label>
                </div>
                <div className="text-xs text-gray-500 ml-6 mb-2">Monitor for new content as its published</div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily">Daily</Label>
                </div>
                <div className="text-xs text-gray-500 ml-6 mb-2">Search once a day</div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly">Weekly</Label>
                </div>
                <div className="text-xs text-gray-500 ml-6">Search once a week</div>
              </RadioGroup>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-700 mb-2">Brand tone</h2>
              <RadioGroup defaultValue="professional">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="professional" />
                  <Label htmlFor="professional">
                    <span className="mr-2">Professional</span>
                    <span role="img" aria-label="professional">🧐</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="friendly" id="friendly" />
                  <Label htmlFor="friendly">
                    <span className="mr-2">Friendly</span>
                    <span role="img" aria-label="friendly">😊</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="serious" id="serious" />
                  <Label htmlFor="serious">
                    <span className="mr-2">Serious</span>
                    <span role="img" aria-label="serious">😐</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <Button variant="secondary" className="w-full">Go back</Button>
            <Button className="w-full">Save & continue</Button>
          </div>
        </div>
      </div>
    </div>
  )
}