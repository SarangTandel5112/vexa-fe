import React from 'react';
import { Header } from '@/components/layout/Header';
import { PageWrapper, MainContent } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

// Add icon component
const AddIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7.6665H8M8 7.6665H14M8 7.6665V13.6665M8 7.6665V1.6665" stroke="#F3EEE9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ExportIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6667 2.5V5.83333C11.6667 6.29357 12.0398 6.66667 12.5001 6.66667H15.8334" stroke="#102D4F" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.58341 18C9.85956 18 10.0834 17.7761 10.0834 17.5C10.0834 17.2239 9.85956 17 9.58341 17V17.5V18ZM11.6667 2.5L12.0203 2.14645C11.9265 2.05268 11.7994 2 11.6667 2V2.5ZM15.8334 6.66667H16.3334C16.3334 6.53406 16.2807 6.40688 16.187 6.31311L15.8334 6.66667ZM15.3334 10.8333C15.3334 11.1095 15.5573 11.3333 15.8334 11.3333C16.1096 11.3333 16.3334 11.1095 16.3334 10.8333H15.8334H15.3334ZM11.6667 15.3333C11.3906 15.3333 11.1667 15.5572 11.1667 15.8333C11.1667 16.1095 11.3906 16.3333 11.6667 16.3333V15.8333V15.3333ZM17.5001 16.3333C17.7762 16.3333 18.0001 16.1095 18.0001 15.8333C18.0001 15.5572 17.7762 15.3333 17.5001 15.3333V15.8333V16.3333ZM15.3536 12.9798C15.1584 12.7845 14.8418 12.7845 14.6465 12.9798C14.4513 13.175 14.4513 13.4916 14.6465 13.6869L15.0001 13.3333L15.3536 12.9798ZM17.5001 15.8333L17.8536 16.1869C18.0489 15.9916 18.0489 15.675 17.8536 15.4798L17.5001 15.8333ZM14.6465 17.9798C14.4513 18.175 14.4513 18.4916 14.6465 18.6869C14.8418 18.8821 15.1584 18.8821 15.3536 18.6869L15.0001 18.3333L14.6465 17.9798ZM9.58341 17.5V17H5.83341V17.5V18H9.58341V17.5ZM5.83341 17.5V17C5.18908 17 4.66675 16.4777 4.66675 15.8333H4.16675H3.66675C3.66675 17.03 4.6368 18 5.83341 18V17.5ZM4.16675 15.8333H4.66675V4.16667H4.16675H3.66675V15.8333H4.16675ZM4.16675 4.16667H4.66675C4.66675 3.52233 5.18908 3 5.83341 3V2.5V2C4.6368 2 3.66675 2.97005 3.66675 4.16667H4.16675ZM5.83341 2.5V3H11.6667V2.5V2H5.83341V2.5ZM11.6667 2.5L11.3132 2.85355L15.4799 7.02022L15.8334 6.66667L16.187 6.31311L12.0203 2.14645L11.6667 2.5ZM15.8334 6.66667H15.3334V10.8333H15.8334H16.3334V6.66667H15.8334ZM11.6667 15.8333V16.3333H17.5001V15.8333V15.3333H11.6667V15.8333ZM15.0001 13.3333L14.6465 13.6869L17.1465 16.1869L17.5001 15.8333L17.8536 15.4798L15.3536 12.9798L15.0001 13.3333ZM17.5001 15.8333L17.1465 15.4798L14.6465 17.9798L15.0001 18.3333L15.3536 18.6869L17.8536 16.1869L17.5001 15.8333Z" fill="#102D4F"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10L12 14L16 10" stroke="#8D8D8D" strokeWidth="1.5"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 3.0105C8.54738 5.06155 7.45262 6.2115 5.5 8.26255L10.5 12.9894" stroke="#8D8D8D" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 3.0105C7.45262 5.06155 8.54738 6.2115 10.5 8.26255L5.5 12.9894" stroke="#444444" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface UserData {
  id: string;
  name: string;
  projects: number;
  agentUsed: string;
  plan: string;
}

const userData: UserData[] = [
  { id: 'BG6767', name: 'User Name 1', projects: 1, agentUsed: '1', plan: 'Free Trial' },
  { id: 'BG6767', name: 'User Name 1', projects: 1, agentUsed: 'AI Moderator', plan: 'Free Trial' },
  { id: 'BG6767', name: 'User Name 1', projects: 25, agentUsed: 'AI Moderator', plan: 'Free Trial' },
  { id: 'BG6767', name: 'User Name 1', projects: 25, agentUsed: 'AI Moderator', plan: 'Free Trial' },
  { id: 'BG6767', name: 'User Name 1', projects: 25, agentUsed: 'AI Moderator', plan: 'Free Trial' },
  { id: 'BG6767', name: 'User Name 1', projects: 25, agentUsed: 'AI Moderator', plan: 'Free Trial' },
  { id: 'BG6767', name: 'User Name 1', projects: 25, agentUsed: 'AI Moderator', plan: 'Free Trial' },
  { id: 'BG6767', name: 'User Name 1', projects: 25, agentUsed: 'AI Moderator', plan: 'Free Trial' },
  { id: 'BG6767', name: 'User Name 1', projects: 25, agentUsed: 'AI Moderator', plan: 'Free Trial' },
];

export default function UserPage() {
  return (
    <PageWrapper>
      <Header variant="dashboard" />
      
      <MainContent className="py-4">
        {/* Company Info Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-8">
          <div className="flex flex-col">
            <h1 className="text-2xl lg:text-4xl font-bricolage font-bold text-[#401A4D] mb-2">
              Oral B
            </h1>
            <p className="text-base text-[#827487] font-sf-pro">
              Showing 10 of 120 users
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button variant="social" className="w-full sm:w-auto">
              Edit Company
            </Button>
            <Button variant="primary" icon={<AddIcon />} className="w-full sm:w-auto">
              Add Company
            </Button>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white/70 backdrop-blur-[15px] border border-[#776F69]/28 rounded-[36px] p-6 lg:p-10">
          {/* Table Header with Filters */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
            <h2 className="text-lg font-bricolage text-[#444]">Company</h2>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Filter Toggle */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-[#E7E7E7] rounded-full p-1 w-8 h-5">
                  <div className="w-3 h-3 bg-[#8D8D8D] rounded-full"></div>
                </div>
                <span className="text-sm text-[#8D8D8D] font-sf-pro">Filters Off</span>
              </div>
              
              {/* Export Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E7E7E7] rounded-xl text-sm text-[#444] font-sf-pro hover:bg-gray-50 transition-colors cursor-pointer">
                <span>Export</span>
                <ExportIcon />
              </button>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-6 bg-[#E7E7E7] border border-[#DBDADE] rounded-t-3xl">
                <div className="text-sm text-[#444] font-sf-pro">User Id</div>
                <div className="text-sm text-[#444] font-sf-pro">User Name</div>
                <div className="text-sm text-[#444] font-sf-pro">Project(s)</div>
                <div className="text-sm text-[#444] font-sf-pro">Agent Used</div>
                <div className="text-sm text-[#444] font-sf-pro">Plan</div>
              </div>

              {/* Table Rows */}
              {userData.map((user, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-5 gap-4 p-6 border-x border-b border-[#DBDADE] ${
                    index === userData.length - 1 ? 'rounded-b-3xl' : ''
                  }`}
                >
                  <div className="text-base text-[#72346A] font-sf-pro">{user.id}</div>
                  <div className="text-base text-[#282C34] font-sf-pro">{user.name}</div>
                  <div className="text-base text-[#8D8D8D] font-sf-pro">{user.projects}</div>
                  <div className="text-base text-[#8D8D8D] font-sf-pro">{user.agentUsed}</div>
                  <div>
                    <button className="flex items-center gap-2 px-3 py-1 bg-white border border-[#612A74] rounded-xl text-xs text-[#612A74] font-sf-pro hover:bg-gray-50 transition-colors cursor-pointer">
                      <span>{user.plan}</span>
                      <ChevronDownIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-4">
              {/* Previous Button */}
              <button className="flex items-center gap-2 text-[#8D8D8D] font-sf-pro hover:text-[#444] transition-colors cursor-pointer">
                <ChevronLeftIcon />
                <span>Previous</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-[#612A74] text-white rounded-sm text-sm font-sf-pro cursor-pointer">
                  1
                </button>
                <button className="px-3 py-1 bg-[#E5E0DA] text-[#979797] rounded-sm text-sm font-sf-pro hover:bg-[#D0CAC5] transition-colors cursor-pointer">
                  2
                </button>
                <button className="px-3 py-1 bg-[#E5E0DA] text-[#979797] rounded-sm text-sm font-sf-pro hover:bg-[#D0CAC5] transition-colors cursor-pointer">
                  3
                </button>
              </div>

              {/* Next Button */}
              <button className="flex items-center gap-2 text-[#444] font-sf-pro hover:text-[#612A74] transition-colors cursor-pointer">
                <span>Next</span>
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </MainContent>
    </PageWrapper>
  );
}
