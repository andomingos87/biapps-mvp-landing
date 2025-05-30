export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      budget_requests: {
        Row: {
          budget: string
          budget_amount: string | null
          business_segment: string
          created_at: string
          deadline: string
          email: string
          full_name: string
          id: string
          project_goal: string
          project_stage: string
          schedule_call: string
          solution_types: string[]
          whatsapp: string
        }
        Insert: {
          budget: string
          budget_amount?: string | null
          business_segment: string
          created_at?: string
          deadline: string
          email: string
          full_name: string
          id?: string
          project_goal: string
          project_stage: string
          schedule_call: string
          solution_types: string[]
          whatsapp: string
        }
        Update: {
          budget?: string
          budget_amount?: string | null
          business_segment?: string
          created_at?: string
          deadline?: string
          email?: string
          full_name?: string
          id?: string
          project_goal?: string
          project_stage?: string
          schedule_call?: string
          solution_types?: string[]
          whatsapp?: string
        }
        Relationships: []
      }
      case_studies: {
        Row: {
          category: string
          created_at: string | null
          description: string
          id: string
          image_url: string
          results: string
          tags: string[]
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description: string
          id?: string
          image_url?: string
          results: string
          tags?: string[]
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string
          id?: string
          image_url?: string
          results?: string
          tags?: string[]
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          budget: string | null
          company: string | null
          created_at: string
          deadline: string | null
          email: string
          full_name: string
          how_did_you_find: string | null
          id: string
          origem: string | null
          position: string | null
          project_description: string | null
          project_type: string | null
          whatsapp: string
        }
        Insert: {
          budget?: string | null
          company?: string | null
          created_at?: string
          deadline?: string | null
          email: string
          full_name: string
          how_did_you_find?: string | null
          id?: string
          origem?: string | null
          position?: string | null
          project_description?: string | null
          project_type?: string | null
          whatsapp: string
        }
        Update: {
          budget?: string | null
          company?: string | null
          created_at?: string
          deadline?: string | null
          email?: string
          full_name?: string
          how_did_you_find?: string | null
          id?: string
          origem?: string | null
          position?: string | null
          project_description?: string | null
          project_type?: string | null
          whatsapp?: string
        }
        Relationships: []
      }
      clients: {
        Row: {
          id: string;
          name: string;
          email: string;
          password: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          password: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          password?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      talent_applications: {
        Row: {
          additional_info: string | null
          available_clt: boolean | null
          available_freelance: boolean | null
          available_fulltime: boolean | null
          city: string | null
          created_at: string
          email: string
          experience_level: string
          frameworks: string[] | null
          full_name: string
          github: string | null
          id: string
          immediate_availability: string
          is_registered_company: string
          linkedin: string | null
          origem: string | null
          other_frameworks: string | null
          other_languages: string | null
          other_tools: string | null
          programming_languages: string[] | null
          remote_experience: string
          skills: string
          state: string | null
          tools: string[] | null
          website: string | null
          whatsapp: string
        }
        Insert: {
          additional_info?: string | null
          available_clt?: boolean | null
          available_freelance?: boolean | null
          available_fulltime?: boolean | null
          city?: string | null
          created_at?: string
          email: string
          experience_level: string
          frameworks?: string[] | null
          full_name: string
          github?: string | null
          id?: string
          immediate_availability: string
          is_registered_company: string
          linkedin?: string | null
          origem?: string | null
          other_frameworks?: string | null
          other_languages?: string | null
          other_tools?: string | null
          programming_languages?: string[] | null
          remote_experience: string
          skills: string
          state?: string | null
          tools?: string[] | null
          website?: string | null
          whatsapp: string
        }
        Update: {
          additional_info?: string | null
          available_clt?: boolean | null
          available_freelance?: boolean | null
          available_fulltime?: boolean | null
          city?: string | null
          created_at?: string
          email?: string
          experience_level?: string
          frameworks?: string[] | null
          full_name?: string
          github?: string | null
          id?: string
          immediate_availability?: string
          is_registered_company?: string
          linkedin?: string | null
          origem?: string | null
          other_frameworks?: string | null
          other_languages?: string | null
          other_tools?: string | null
          programming_languages?: string[] | null
          remote_experience?: string
          skills?: string
          state?: string | null
          tools?: string[] | null
          website?: string | null
          whatsapp?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
