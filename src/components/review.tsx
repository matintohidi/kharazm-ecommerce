import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PublicReview } from "@/lib/services";
import { Star } from "lucide-react";

interface ReviewProps {
  review: PublicReview;
}

const Review = ({ review }: ReviewProps) => {
  const { review: comment, star, user } = review;

  return (
    <div className="first:border-t-0 border-t last:border-b border-border p-4 flex flex-col">
      <div className="flex items-center gap-2">
        <h3 className="text-xs font-light text-muted-foreground">
          {user.username}
        </h3>
        <Badge variant="secondary">کاربر</Badge>
      </div>
      <div className="flex flex-col mt-2">
        <div className="flex items-center mb-8">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                star > i ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-sm font-light text-foreground">{comment}</p>
      </div>
    </div>
  );
};

export default Review;
