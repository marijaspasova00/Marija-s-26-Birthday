interface ActivityCardProps {
  title: string;
  description: string;
  emoji: string;
  delay?: number;
}

const ActivityCard = ({ title, description, emoji, delay = 0 }: ActivityCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <span className="text-3xl mb-4 block">{emoji}</span>
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ActivityCard;
