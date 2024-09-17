import {FC} from "react";

interface JobOfferSkeletonProps {

}

export const JobOfferSkeleton: FC<JobOfferSkeletonProps> = ({}) => {
    return (
        <li className="bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
                <div className="p-8">
                    <div className="animate-pulse h-4 bg-gray-600 rounded w-32 mb-2"></div>
                    <div className="animate-pulse block mt-1 h-6 bg-gray-600 rounded w-48"></div>
                    <div className="flex flex-wrap items-center mt-2">
                        <div className="animate-pulse h-4 bg-gray-600 rounded w-20"></div>
                        <span className="mx-2 text-gray-600">•</span>
                        <div className="animate-pulse h-4 bg-gray-600 rounded w-12"></div>
                        <span className="mx-2 text-gray-600">•</span>
                        <div className="animate-pulse h-4 bg-gray-600 rounded w-16"></div>
                        <span className="mx-2 text-gray-600">•</span>
                        <div className="animate-pulse h-4 bg-gray-600 rounded w-24"></div>
                    </div>
                    <div className="mt-4 space-y-2">
                        <div className="animate-pulse h-4 bg-gray-600 rounded w-full"></div>
                        <div className="animate-pulse h-4 bg-gray-600 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </li>
    );
};