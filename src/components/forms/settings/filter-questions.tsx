"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useFilterQuestions } from "@/hooks/settings/use-settings";
import React from "react";
import FormGenerator from "../form-generator";
import Section from "@/components/section-label";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";

type Props = {
  id: string;
};

const FilterQuestions = ({ id }: Props) => {
  const {
    errors,
    loading,
    onAddFilterQuestionsHandler,
    onGetQuestions,
    register,
    isQuestions,
  } = useFilterQuestions(id);

  return (
    <Card className="w-full grid grid-cols-1 lg:grid-cols-2">
      <CardContent className="p-6 border-r-[1px]">
        <CardTitle>Help Desk</CardTitle>
        <form
          onSubmit={onAddFilterQuestionsHandler}
          className="flex flex-col gap-6 mt-10"
        >
          <div className="flex flex-col gap-3">
            <Section
              label="Question"
              message="Add a question that you want your chatbot to ask"
            />
            <FormGenerator
              inputType="input"
              register={register}
              errors={errors}
              form="filter-questions-form"
              name="question"
              placeholder="Type your question"
              type="text"
            />
          </div>
          <div className="lg:h-[170px]"></div>
          <Button
            type="submit"
            className="bg-orange hover:bg-orange hover:opacity-70 transition duration-150 ease-in-out text-white font-semibold"
          >
            Create
          </Button>
        </form>
      </CardContent>
      <CardContent className="p-6 overflow-y-auto chat-window">
        <Loader loading={loading}>
          {isQuestions.length ? (
            isQuestions.map((question) => (
              <p key={question.id} className="font-bold">
                {question.question}
              </p>
            ))
          ) : (
            <CardDescription>No questions added</CardDescription>
          )}
        </Loader>
      </CardContent>
    </Card>
  );
};

export default FilterQuestions;
