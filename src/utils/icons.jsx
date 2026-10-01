import {
  Brain, Cpu, Network, MessagesSquare, Database, Wrench, Puzzle, Plug,
  RefreshCw, Bot, Code2, MonitorSmartphone, LayoutDashboard, Server,
  FileJson, KeyRound, Thermometer, Boxes, Search, SlidersHorizontal,
  Github, Rocket, Lock, ShieldAlert, Layers, Globe, Zap, BookOpen,
  GitBranch, Cloud, Terminal, Workflow, Sparkles, GraduationCap, Map,
  ClipboardCheck, RotateCcw, Home, ListChecks, BarChart3, Sun, Moon,
  Menu, X, ChevronRight, Check, AlertTriangle, Info, Lightbulb, Target,
  ArrowRight, Play, FlaskConical, Eye, Link2, Package, HardDrive, Braces,
  FileCode2, Webhook, Timer, Gauge, Scale, History, FolderGit2, Send,
  PenLine, Presentation, ScanSearch, MemoryStick, Split, Cable,
  Download, Award,
} from 'lucide-react';

/**
 * Maps the icon NAME strings used in data/modules/*.js to real components.
 * Content authors: use ONLY the keys listed here.
 */
export const iconMap = {
  Brain, Cpu, Network, MessagesSquare, Database, Wrench, Puzzle, Plug,
  RefreshCw, Bot, Code2, MonitorSmartphone, LayoutDashboard, Server,
  FileJson, KeyRound, Thermometer, Boxes, Search, SlidersHorizontal,
  Github, Rocket, Lock, ShieldAlert, Layers, Globe, Zap, BookOpen,
  GitBranch, Cloud, Terminal, Workflow, Sparkles, GraduationCap, Map,
  ClipboardCheck, RotateCcw, Home, ListChecks, BarChart3, Sun, Moon,
  Menu, X, ChevronRight, Check, AlertTriangle, Info, Lightbulb, Target,
  ArrowRight, Play, FlaskConical, Eye, Link2, Package, HardDrive, Braces,
  FileCode2, Webhook, Timer, Gauge, Scale, History, FolderGit2, Send,
  PenLine, Presentation, ScanSearch, MemoryStick, Split, Cable,
  Download, Award,
};

export function getIcon(name, size = 18) {
  const Cmp = iconMap[name] || Sparkles;
  return <Cmp size={size} />;
}
